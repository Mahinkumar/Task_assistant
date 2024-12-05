
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';
import { and, eq } from 'drizzle-orm';

let Init_Data: {
    Id: string;
    UserId: string;
    Type: string;
    SetDate: Date;
    EndDate: Date | null;
    CreatedDate: Date;
    Title: string;
    Content: string | null;
    isCompleted: boolean | null;
}[] = []


export const load = async (event) => {
    if (!event.locals.user) {
        return { user: null, notes:  Init_Data, flipcards:  Init_Data, memcards: Init_Data, todos: Init_Data, sync: false };
    } else {
        let notes = await db.select().from(table.user_dat).where(and(eq(table.user_dat.UserId, event.locals.user.id), eq(table.user_dat.Type, 'notes')));
        let flipcards = await db.select().from(table.user_dat).where(and(eq(table.user_dat.UserId, event.locals.user.id), eq(table.user_dat.Type, 'flipcards')));
        let memcards = await db.select().from(table.user_dat).where(and(eq(table.user_dat.UserId, event.locals.user.id), eq(table.user_dat.Type, 'memcards')));
        let todos = await db.select().from(table.user_dat).where(and(eq(table.user_dat.UserId, event.locals.user.id), eq(table.user_dat.Type, 'todos')));
        return { user: event.locals.user, notes: notes, flipcards: flipcards, memcards: memcards, todos: todos, sync: true };
    }
};

