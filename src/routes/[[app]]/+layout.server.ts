
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';
import { and, eq } from 'drizzle-orm';



let Init_Data: {
    sno: number;
    Id: string;
    UserId: string;
    Type: string;
    SetDate: string;
    EndDate: string | null;
    CreatedDate: string;
    Title: string;
    Content: string | null;
    isCompleted: boolean | null;
}[] = []


export const load = async (event: { locals: { user: { id: string }; }; }) => {
    if (!event.locals.user) {
        return { user: {id : ""}, all_data:Init_Data, sync: false, total: 0};
    } else {
        let all_data = await db.select().from(table.user_dat).where(eq(table.user_dat.UserId, event.locals.user.id));
        return { user: event.locals.user, all_data:all_data, sync: true, total: all_data.length};
    }
};

