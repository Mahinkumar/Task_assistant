
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';

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

            // 

            // if (x[0].embedding){
            //     console.log(cosinesim(x[0].embedding, embedding))
            // }



        }
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
