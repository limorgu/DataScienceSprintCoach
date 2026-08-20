# Future SQL Questions — Q50+

These are planned practice questions, not answers.

The live agent may reorder future questions only when evidence makes a retry more urgent, but once a question is presented its number becomes stable history.

## Q50 — First session after signup, including users with no sessions

Active schema: `current_users_sessions_sql`

Return for every user:
- user_id
- signup_date
- first_session_date
- days_to_first_session
- engagement_status

Requirements:
- earliest session per user;
- preserve users with no sessions;
- no-session users retain NULL first-session/date-gap values;
- derive STARTED vs NO_SESSION;
- one row per user;
- sort no-session users first, then days-to-first-session descending.

Skills:
LEFT JOIN + NULL handling + aggregation + date transformation + output grain.

## Q51 — Count users with and without any session by plan type

Return one row per plan type with:
- total_users
- users_with_session
- users_without_session
- pct_without_session

Skills:
LEFT JOIN, NULL-aware conditional aggregation, distinct-user grain.

## Q52 — First-session channel with missing-session preservation

Return one row per user with:
- first_session_date
- first_channel
- session_status

Do not duplicate users when two sessions exist later.

Skills:
find first row per entity, LEFT JOIN, ROW_NUMBER or two-step minimum-date join, NULL preservation.

## Q53 — Days-to-first-session bucket

Build from the Q50 logic.

Bucket:
- SAME_DAY
- 1_TO_3_DAYS
- 4_TO_7_DAYS
- 8_PLUS_DAYS
- NO_SESSION

Then aggregate counts and percentages by bucket.

Skills:
derived transformation → NULL-aware CASE → aggregate.

## Q54 — Country-level activation rate

Define activated = at least one session within 7 days of signup.

Return by country:
- users
- activated_users
- activation_rate

Include users with no sessions in the denominator.

Skills:
LEFT JOIN, date math, conditional aggregation, denominator correctness.

## Q55 — Plan-type activation rate with minimum-volume filter

Same metric as Q54, by plan_type.

Return only plan types with at least 20 users.

Skills:
aggregate metric, HAVING, NULL-safe denominator.

## Q56 — Monthly signups vs monthly first sessions

Return year-month:
- signups
- users_starting_first_session
- difference

Skills:
two aggregates at different event dates, transformations, join aggregates without row explosion.

## Q57 — Countries with above-average no-session rate

Compute each country's no-session rate and compare it with the overall no-session rate.

Skills:
LEFT JOIN + aggregate + scalar/CTE benchmark + comparison.

## Q58 — Previous month activation rate by country

Compute country × year-month activation rate, then:
- previous_activation_rate
- activation_rate_change

Skills:
aggregate → metric → LAG; partition by country.

## Q59 — Rank countries by activation improvement

Using Q58 logic, rank countries within each year-month by activation_rate_change.

Skills:
multi-stage CTE, LAG, ranking after metric creation.

## Q60 — Detect regression with minimum volume

Flag country-months where:
- at least 50 new users;
- activation rate fell by at least 5 percentage points from prior month.

Skills:
volume guardrail + LAG + threshold filter.

## Q61 — Exact Top 3 countries per month

Return exactly 3 countries per month by activation rate.

Tie-breaker:
1. higher activated_users;
2. higher total_users;
3. country ascending.

Skills:
ROW_NUMBER for exact-N ranking.

## Q62 — Users whose first session is unusually late

Compare each user's days_to_first_session to the average for their country.

Preserve no-session users separately.

Skills:
derived per-user metric + country benchmark + NULL behavior.

## Q63 — Session completion transformation

Map `end_status` into:
- COMPLETED
- NOT_COMPLETED
- UNKNOWN

Then calculate completion rate by channel.

Skills:
text transformation, NULL/unknown handling, aggregation grain.

## Q64 — Channels with no completed sessions

Return channels present in the data but with zero completed sessions.

Skills:
conditional aggregation / HAVING; distinguish from missing rows.

## Q65 — User-level channel diversity

Return one row per user with:
- total_sessions
- distinct_channels
- multi_channel_flag

Include zero-session users.

Skills:
LEFT JOIN, COUNT(column) vs COUNT(*), distinct aggregate, NULL-safe derived flag.

## Q66 — Most-used channel per user

Return exactly one top channel per user with deterministic tie-breaking.

Keep no-session users.

Skills:
aggregate first, rank second, preserve unmatched users.

## Q67 — Previous session channel

For each session, return previous_channel for the same user.

Skills:
LAG target, partition, ordering.

## Q68 — Channel switches per user

Count how many times each user changed channel between consecutive sessions.

Include users with 0 or 1 session with switch_count = 0.

Skills:
LAG + conditional aggregation + LEFT JOIN back to full user population.

## Q69 — Running sessions per user

For each session, show running_session_number.

Skills:
ROW_NUMBER / running count, correct partition and ordering.

## Q70 — Monthly cumulative activated users

Return year-month and cumulative number of distinct users who have ever activated by then.

Skills:
date transformation, deduplication, monthly aggregation, running cumulative logic.

## After Q70

Generate new questions by evidence, not by novelty.

Prefer transfer questions on weak patterns before introducing unrelated advanced SQL.
