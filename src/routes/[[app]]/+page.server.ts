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
    return { tasks }
};
