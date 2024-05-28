CREATE TABLE IF NOT EXISTS "categories" (
	"id" text PRIMARY KEY NOT NULL,
	"plaid_id" text,
	"name" text NOT NULL,
	"userId" text NOT NULL
);
