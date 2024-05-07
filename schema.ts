import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import * as custom from './src/types/db'

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  hashedPassword: text('hashedPassword').notNull(),
  role: text('role').notNull().default('USER').$type<custom.ROLE>(),
  createdAt: text('createdAt').notNull(),
});

export type User = typeof users.$inferSelect; 
export type NewUser = typeof users.$inferInsert; 

