CREATE TABLE IF NOT EXISTS "dev_space_follow" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"followerId" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "dev_space_like" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"postId" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "dev_space_notification" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"is_read" boolean DEFAULT false NOT NULL,
	"type" text NOT NULL,
	"postId" text,
	"created_by" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "dev_space_post" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"content" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dev_space_follow" ADD CONSTRAINT "dev_space_follow_userId_dev_space_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."dev_space_user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dev_space_follow" ADD CONSTRAINT "dev_space_follow_followerId_dev_space_user_id_fk" FOREIGN KEY ("followerId") REFERENCES "public"."dev_space_user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dev_space_like" ADD CONSTRAINT "dev_space_like_userId_dev_space_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."dev_space_user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dev_space_like" ADD CONSTRAINT "dev_space_like_postId_dev_space_post_id_fk" FOREIGN KEY ("postId") REFERENCES "public"."dev_space_post"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dev_space_notification" ADD CONSTRAINT "dev_space_notification_userId_dev_space_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."dev_space_user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dev_space_notification" ADD CONSTRAINT "dev_space_notification_postId_dev_space_post_id_fk" FOREIGN KEY ("postId") REFERENCES "public"."dev_space_post"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dev_space_notification" ADD CONSTRAINT "dev_space_notification_created_by_dev_space_user_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."dev_space_user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dev_space_post" ADD CONSTRAINT "dev_space_post_userId_dev_space_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."dev_space_user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
