CREATE TABLE IF NOT EXISTS "customers" ("customer_id" INTEGER, "country" TEXT, "plan_type" TEXT, "tenure_months" INTEGER);
CREATE TABLE IF NOT EXISTS "tickets" ("ticket_id" INTEGER, "customer_id" INTEGER, "created_ts" TEXT, "issue_type" TEXT, "language" TEXT, "severity" INTEGER, "channel" TEXT, "escalated" INTEGER, "resolved_ts" TEXT);
CREATE TABLE IF NOT EXISTS "ticket_events" ("event_id" INTEGER, "ticket_id" INTEGER, "event_ts" TEXT, "event_type" TEXT);
CREATE TABLE IF NOT EXISTS "model_predictions" ("ticket_id" INTEGER, "model_version" TEXT, "escalation_score" REAL, "predicted_escalation" INTEGER, "true_escalation_need" INTEGER);
CREATE TABLE IF NOT EXISTS "csat" ("ticket_id" INTEGER, "rating" INTEGER);
CREATE TABLE IF NOT EXISTS "experiments" ("ticket_id" INTEGER, "experiment_name" TEXT, "variant" TEXT);
