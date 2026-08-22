CREATE TABLE IF NOT EXISTS "users" ("user_id" INTEGER, "country" TEXT, "plan_type" TEXT, "signup_date" TEXT, "age_group" TEXT, "is_active" INTEGER);
CREATE TABLE IF NOT EXISTS "titles" ("title_id" INTEGER, "genre" TEXT, "release_year" INTEGER, "runtime_min" INTEGER, "is_original" INTEGER, "maturity_rating" TEXT);
CREATE TABLE IF NOT EXISTS "impressions" ("impression_id" INTEGER, "user_id" INTEGER, "title_id" INTEGER, "impression_ts" TEXT, "source" TEXT, "model_version" TEXT, "position" INTEGER, "clicked" INTEGER);
CREATE TABLE IF NOT EXISTS "streams" ("stream_id" INTEGER, "user_id" INTEGER, "title_id" INTEGER, "stream_start_ts" TEXT, "watch_minutes" INTEGER, "completed" INTEGER, "device_type" TEXT);
CREATE TABLE IF NOT EXISTS "experiments" ("user_id" INTEGER, "experiment_name" TEXT, "variant" TEXT, "assigned_date" TEXT);
CREATE TABLE IF NOT EXISTS "subscription_events" ("user_id" INTEGER, "event_date" TEXT, "event_type" TEXT);
