
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

import { env } from '$env/dynamic/private';
import { HfInference } from '@huggingface/inference';
import { cosineDistance } from 'drizzle-orm';

// https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-MiniLM-L6-v2

export const load = async (event) => {
    let tasks = await db.select({ userId: table.tasks.userId, name: table.tasks.name, scheduled: table.tasks.scheduled, StartDate: table.tasks.StartDate, EndDate: table.tasks.EndDate, difficulty: table.tasks.difficulty, priority: table.tasks.priority }).from(table.tasks);
    return { tasks }
};

export const actions = {
    add: async ({ cookies, request }) => {
        //let currentDate = new Date();
        const data = await request.formData();

        let user_id: string | null = (data.get("user_id")?.toString()) || null;
        let name: string | null = (data.get("task_name")?.toString()) || null;
        let is_fixed: boolean | null = (data.get("is_fixed")?.toString() == "true") ? true : false;
        let start: string | null = (data.get("start")?.toString()) || null;
        let end: string | null = (data.get("end")?.toString()) || null;
        let difficulty: number = Number.parseInt((data.get("difficulty")?.toString()) || '0')
        let priority: number = Number.parseInt((data.get("priority")?.toString()) || '0');

        if (name && user_id) {
            let embed = await query({ "inputs": name });
            let embedding = embed.flat(2)
            let data = { userId: user_id, name: name, scheduled: is_fixed, StartDate: start, EndDate: end, difficulty: difficulty, priority: priority, embedding: embedding }
            await db.insert(table.tasks).values(data)
        }
    },

    sched: async ({cookies, request }) => {
        type Task = {
            sno: number,
            userId: string;
            name: string | null;
            scheduled: boolean | null;
            StartDate: string | null;
            EndDate: string | null;
            difficulty: number | null;
            priority: number | null;
            embedding: number[] | null; // Assuming embeddings are stored as arrays of numbers
        };
        
        type TimeSlot = {
            start: string;
            end: string;
        };
        
        type ScheduleTask = {
            task: Task;
            timeSlot: TimeSlot;
            scheduledDate: string;
        };
        
        const times: { [key: number]: TimeSlot } = {
            1: { start: '08:00', end: '09:59' },
            2: { start: '10:00', end: '11:59' },
            3: { start: '13:00', end: '14:59' },
            4: { start: '15:00', end: '16:59' },
            5: { start: '20:00', end: '22:59' },
        };
        
        async function scheduleTasks() {
            // Fetch tasks that are not yet scheduled
            const tasks: Task[] = await db.select()
                .from(table.tasks)
                .where(eq(table.tasks.scheduled, false))
                .orderBy(table.tasks.priority);
        
            // Fetch pre-scheduled tasks
            const preScheduledTasks: Task[] = await db.select()
                .from(table.tasks)
                .where(eq(table.tasks.scheduled, true))
                .orderBy(table.tasks.priority);
        
            // Sort tasks based on cosine similarity, priority, and difficulty
            const sortedTasks = tasks.sort((a, b) => {
                const similarity = cosinesim(a.embedding || [], b.embedding || []);
                const priorityDiff = (b.priority ?? 0) - (a.priority ?? 0);
                const difficultyDiff = (b.difficulty ?? 0) - (a.difficulty ?? 0);
                return priorityDiff + difficultyDiff + similarity; // Combine similarity and priority/difficulty differences
            });
        
            const scheduledTasks: ScheduleTask[] = [];
            let currentDatex = new Date(); // Today's date
            let currentDatey = new Date();
            let slotId = 1
            // Loop through tasks and assign times
            for (const task of sortedTasks) {
                let assigned = false;
        
                // Find a free time slot that does not conflict with pre-scheduled tasks
                
                const timeSlot = times[slotId];
                // Create fresh Date objects for each task and time slot
                const [startHours, startMinutes] = timeSlot.start.split(':').map(Number);
                const startTime = currentDatex; // Fresh copy of currentDate
                startTime.setUTCHours(startHours, startMinutes, 0, 0); // Set hours, minutes, seconds (0), milliseconds (0)

                const [endHours, endMinutes] = timeSlot.end.split(':').map(Number);
                const endTime = currentDatey; // Fresh copy of currentDate
                endTime.setUTCHours(endHours, endMinutes, 0, 0); // Set hours, minutes, seconds (0), milliseconds (0)

                // Check for conflicts with pre-scheduled tasks
                let conflictFound = false; // Flag to track if a conflict is found

                for (const preTask of preScheduledTasks) {
                    let preStart = new Date(preTask.StartDate ?? '');
                    let preEnd = new Date(preTask.EndDate ?? '');

                    // Check if the task conflicts with the current task (add your conflict condition here)
                    // For example, assuming you have a `startTime` and `endTime` for a new task:
                    if (
                        (startTime >= preStart && startTime < preEnd) ||  // New task starts during an existing task
                        (endTime > preStart && endTime <= preEnd) ||      // New task ends during an existing task
                        (startTime <= preStart && endTime >= preEnd) ||   // New task fully contains the existing task
                        (startTime === preStart && endTime === preEnd)    // New task starts and ends exactly the same as an existing task
                    ) {
                        conflictFound = true;
                    }
                }
    
                if (!conflictFound) {
                    // If no conflict, assign this time slot
                    task.StartDate = startTime.toISOString();
                    task.EndDate = endTime.toISOString();
                    console.log(task.StartDate)
                    task.scheduled = true;
                    // Add to the scheduled tasks list
                    scheduledTasks.push({ task, timeSlot, scheduledDate: currentDatex.toISOString() });
                    assigned = true;
                }
                console.log(slotId)
                slotId += 1
                if (slotId == 6){
                    slotId = 1
                    currentDatex.setUTCDate(currentDatex.getUTCDate()+1)
                    currentDatey.setUTCDate(currentDatey.getUTCDate()+1)
                }
            }
            
            // Update tasks in the database (mark them as scheduled)
            for (const scheduledTask of scheduledTasks) {
                await db.update(table.tasks)
                    .set({
                        scheduled: true,
                        StartDate: scheduledTask.task.StartDate,
                        EndDate: scheduledTask.task.EndDate,
                    }).where(eq(table.tasks.sno, scheduledTask.task.sno));
            }
        
            // return scheduledTasks; // Return the scheduled tasks
        }
        
        await scheduleTasks();
        
    }
    

}

async function query(data: { inputs: string; }) {
    const client = new HfInference(env.TEST_KEY)

    const result = await client.featureExtraction({
        model: "sentence-transformers/all-MiniLM-L6-v2",
        inputs: data.inputs
    })

    return result;
}


function cosinesim(A: number[], B: number[]) {
    var dotproduct = 0;
    var mA = 0;
    var mB = 0;

    for (var i = 0; i < A.length; i++) {
        dotproduct += A[i] * B[i];
        mA += A[i] * A[i];
        mB += B[i] * B[i];
    }

    mA = Math.sqrt(mA);
    mB = Math.sqrt(mB);
    var similarity = dotproduct / (mA * mB);

    return similarity;
}
