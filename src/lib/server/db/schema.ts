import { pgTable, serial, text, integer, timestamp, boolean, index, vector } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: text('id').primaryKey(),
	age: integer('age'),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull()
});

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export const user_dat = pgTable('UserData', {
	sno: serial('sno').primaryKey(),
	Id: text('id'),
	UserId: text('user_id')
		.notNull()
		.references(() => user.id),
	Type: text('type')
		.notNull(),
	SetDate: timestamp('SetDate', { withTimezone: true, mode: 'string' }).notNull(),
	EndDate: timestamp('EndDate', { withTimezone: true, mode: 'string' }),
	CompletedDate: timestamp('CompletedDate', { withTimezone: true, mode: 'string' }),
	CreatedDate: timestamp('CreatedDate', { withTimezone: true, mode: 'string' }).notNull(),
	Title: text('title').notNull(),
	Content: text('content'),
	Context: text('context'),
	difficulty: integer('difficulty').default(2),
	isCompleted: boolean('iscompleted').default(false),
});


export const tasks = pgTable('tasks',{
	sno: serial('sno').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	StartDate: timestamp('StartDate', { withTimezone: true, mode: 'string' }),
	EndDate: timestamp('EndDate', { withTimezone: true, mode: 'string' }),
	name: text('name'),
	difficulty: integer('difficulty').default(0),
	priority: integer('priority').default(0),
	scheduled: boolean('scheduled').default(false),
	embedding: vector('embedding', { dimensions: 384 }),
},
(table) => ({
    embeddingIndex: index('embeddingIndex').using('hnsw', table.embedding.op('vector_cosine_ops')),
}),)

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;


export type Tasks = typeof tasks.$inferSelect;
