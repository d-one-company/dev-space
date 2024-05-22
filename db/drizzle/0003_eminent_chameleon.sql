ALTER TABLE "dev_space_user" ADD COLUMN "username" text;--> statement-breakpoint
ALTER TABLE "dev_space_user" ADD CONSTRAINT "dev_space_user_username_unique" UNIQUE("username");