CREATE TABLE IF NOT EXISTS "dev_space_bookmark" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"postId" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dev_space_bookmark" ADD CONSTRAINT "dev_space_bookmark_userId_dev_space_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."dev_space_user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dev_space_bookmark" ADD CONSTRAINT "dev_space_bookmark_postId_dev_space_post_id_fk" FOREIGN KEY ("postId") REFERENCES "public"."dev_space_post"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
