import { validateSessionToken } from '$lib/server/auth.js';
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';
import { and, eq } from 'drizzle-orm';
import { json } from '@sveltejs/kit';


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


export async function POST({ request, cookies }) {
    let shared = await request.json();
    let user_token = cookies.get('auth-session')
    if (user_token) {
        let { session, user } = await validateSessionToken(user_token)
        if (user) {
            commit_user_data(user,shared.shared.all_data)
            return json({ status: 200 });
        } else {
            // Not an authenticated user 
            return json({ status: 500 });
        }
    } else {
        // Not Logged in user 
        return json({ status: 500 });
    }
}

async function commit_user_data( user: { id: string; username: string; }, new_data: userData ) {
    let all = await db.select().from(table.user_dat).where(eq(table.user_dat.UserId, user.id));
    let min = all.length
    let insertion_data: dataFrag; 
    await db.transaction(async (tx) => {
    for(let i=min; i<new_data.length ; i++){
        insertion_data = new_data[i]
        delete insertion_data.sno
        await tx.insert(table.user_dat).values(insertion_data);
    }});
}

function merge_data(...arg: userData){
    let Final_data: userData = [];
    for (let i = 0; i < arg.length; i++){
        Final_data = Final_data.concat(arg[i])
    } 
    return Final_data;
}

