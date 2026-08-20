# Practice Schema Registry

Never combine tables from different dataset IDs.

## current_users_sessions_sql — ACTIVE

Use for the current continuation beginning at Q50.

### users
- user_id
- signup_date
- plan_type
- language
- country
- age_group

### sessions
- session_id
- user_id
- session_start
- channel
- topic
- end_status

### Relationship
`users.user_id = sessions.user_id`

Important:
- some users may have zero sessions;
- LEFT JOIN is therefore meaningful;
- NULL right-side fields must be handled intentionally.

## historical_ai_support_sql — INACTIVE / HISTORICAL

An earlier dataset used:
- users
- sessions
- model_responses
- feedback

This schema may be referenced only for historical questions explicitly tied to it.

**Do not use `feedback` in current_users_sessions_sql.**

## Other historical synthetic datasets

Prior SQL practice also used synthetic tables for:
- model safety/evaluation;
- sampling and labeling jobs;
- risk tiers;
- incident severity / affected users.

Exact table definitions should be recovered from source practice assets before reusing them.

Do not infer missing columns from a topic name.
