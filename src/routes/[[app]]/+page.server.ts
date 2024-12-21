import { HfInference } from "@huggingface/inference";
import type { Actions } from "./$types";
import { env } from "$env/dynamic/private";
import { db } from "$lib/server/db";

import * as table from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';


type userData = dataFrag[]

type dataFrag = {
    sno? : number;
    Id: string | null;
    UserId: string;
    Type: string;
    SetDate: string;
    EndDate: string | null;
    CompletedDate: string | null;
    CreatedDate: string;
    Title: string;
    Content: string | null;
    Context: string | null;
    difficulty: number | null;
    isCompleted: boolean | null;
}

export const load = async (event) => {
    let tasks = await db.select({ userId: table.tasks.userId, name: table.tasks.name, scheduled: table.tasks.scheduled, StartDate: table.tasks.StartDate, EndDate: table.tasks.EndDate, difficulty: table.tasks.difficulty, priority: table.tasks.priority }).from(table.tasks);
    

    const client = new HfInference(env.TEST_KEY);

    const chatCompletion = await client.chatCompletion({
        model:"microsoft/Phi-3.5-mini-instruct",
        messages: [
            {
                role: "user",
                content: `
                INSTRUCTION: You are a bot named Task Assistant. You can summarize, guide and suggest to the user. Also answer from
                the provided information. Now Welcome the user in short and simple manner
                `
            }
        ],
        max_tokens: 1024
    });
    return { chatCompletion ,tasks}
};


export const actions = {
    get_ai: async ({cookies, request}) =>{
    let tasks = await db.select({ userId: table.tasks.userId, name: table.tasks.name, scheduled: table.tasks.scheduled, StartDate: table.tasks.StartDate, EndDate: table.tasks.EndDate, difficulty: table.tasks.difficulty, priority: table.tasks.priority }).from(table.tasks);
    const data = await request.formData();
    let val = data.get("prompt");

    const client = new HfInference(env.TEST_KEY);

    const chatCompletion = await client.chatCompletion({
        model:"microsoft/Phi-3.5-mini-instruct",
        messages: [
            {
                role: "user",
                content: `
                INSTRUCTION: You are a bot named Task Assistant. You can summarize, guide and suggest to the user. Also answer from
                the provided information. Now Welcome the user in short and simple manner

                User Data \n
                ` + tasks.toString() + '\n User Prompt' + val?.toString()
            }
        ],
        max_tokens: 1024
    });
    return { chatCompletion}
    }
}