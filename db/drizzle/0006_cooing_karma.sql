-- Custom SQL migration file, put you code below! --

DELETE FROM "dev_space_feed" WHERE "postAuthorId" IS NULL;
ALTER TABLE "dev_space_feed" ALTER COLUMN "postAuthorId" SET NOT NULL;
