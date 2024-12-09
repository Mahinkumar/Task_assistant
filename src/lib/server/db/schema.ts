import { pgTable, serial, text, integer, timestamp, boolean } from 'drizzle-orm/pg-core';

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

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;
