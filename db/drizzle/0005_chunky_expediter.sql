ALTER TABLE "dev_space_feed" ADD COLUMN "postAuthorId" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dev_space_feed" ADD CONSTRAINT "dev_space_feed_postAuthorId_dev_space_user_id_fk" FOREIGN KEY ("postAuthorId") REFERENCES "public"."dev_space_user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
