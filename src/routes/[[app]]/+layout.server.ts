
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';
import { and, eq } from 'drizzle-orm';


export const load = async (event) => {

    if (!event.locals.user){
        return { user: event.locals.user, notes: [], flipcards: [], memcards: [], todos: [] };
    }else{
    let notes = await db.select().from(table.user_dat).where(and(eq(table.user_dat.UserId, event.locals.user.id), eq(table.user_dat.Type, 'notes')));
    let flipcards = await db.select().from(table.user_dat).where(and(eq(table.user_dat.UserId, event.locals.user.id), eq(table.user_dat.Type, 'flipcards')));
    let memcards = await db.select().from(table.user_dat).where(and(eq(table.user_dat.UserId, event.locals.user.id), eq(table.user_dat.Type, 'memcards')));
    let todos = await db.select().from(table.user_dat).where(and(eq(table.user_dat.UserId, event.locals.user.id), eq(table.user_dat.Type, 'todos')));
    return { user: event.locals.user, notes: notes, flipcards: flipcards, memcards: memcards, todos: todos };
    }
};

