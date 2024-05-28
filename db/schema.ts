import { createInsertSchema } from "drizzle-zod";
import { pgTable, text } from "drizzle-orm/pg-core";
// import { createId } from "@paralleldrive/cuid2";

export const accounts = pgTable("accounts", {
  id: text("id").primaryKey(),

  plaidId: text("plaid_id"),
  name: text("name").notNull(),
  userId: text("userId").notNull(),
});

export const insertAccountSchema = createInsertSchema(accounts);

export const categories = pgTable("categories", {
  id: text("id").primaryKey(),

  plaidId: text("plaid_id"),
  name: text("name").notNull(),
  userId: text("userId").notNull(),
});
export const insertCategorySchema = createInsertSchema(categories);
