# 30-Day Data Science Sprint Question Bank

This public bank consolidates the full topic coverage from the four-week Sprint. It records no learner status, answers, scores, or next-question selection. Use the topic folders for browsing and the [synthetic data bank](../../../../resources/data/README.md) for the required tables.

## SQL

1. Count model responses by `model_version`; calculate average latency, total cost, and safety rate with explicit denominators.
2. Join users, sessions, and model responses; return response volume and safety rate by language, plan, and country.
3. Join evaluation labels to responses; calculate false-negative counts and false-negative rates by segment, and explain why they can rank differently.
4. Use a CTE to calculate segment-level true positives, false negatives, and false-negative rate; compare each segment to a one-row overall benchmark.
5. Rank sessions within channel by safety or latency; return the top three using deterministic tie-breaking.
6. Compare every response's latency with its model-version average using a window function.
7. Use `LAG` to compare each user's weekly watch time with the prior week.
8. Use `LEAD` to calculate time until the next support event.
9. Build a daily volume table and a seven-day rolling average.
10. Compute cumulative watch minutes per user and identify inactivity gaps.
11. Build an impression → click → 10-minute-watch funnel with safe denominators.
12. Calculate D1 and D7 retention by signup cohort; identify the largest relative retention decline.
13. Calculate treatment/control sample sizes, conversion, quality, safety, latency, and cost by experiment variant.
14. Check sample-ratio mismatch against a planned allocation and state the guardrail before interpreting a result.
15. Segment an experiment by device, country, and plan without declaring a subgroup win prematurely.
16. Create one model-ready row per user from event-, user-, and outcome-level tables; protect the intended grain.
17. Create ticket-level recency, frequency, and historical-resolution features without future leakage.
18. Add duplicate, missing-key, impossible-value, and row-count checks to a feature query.
19. Compare pre/post feature distributions and identify a likely traffic-mix confounder.
20. Aggregate daily and weekly support volume; compare each day with the same weekday one week earlier using `LAG(..., 7)`.
21. Add a moving average, detect unusual spikes, and explain the baseline used.
22. Combine model version, experiment assignment, and post-launch outcome in one query.
23. Compare online metrics before and after launch by segment, separating model change from traffic-mix change.
24. Build matched pre/post cohorts with explicit eligibility rules.
25. Write a timed query using joins, CTEs, a window, and a final ranking while documenting the final row grain.

## Python and pandas

1. Move all zeros to the end of a list while preserving order; target `O(n)`.
2. Check whether two strings are anagrams; state time and space complexity.
3. Implement `is_prime(n)` with edge-case handling.
4. Build a frequency dictionary, return the first non-repeated character, and solve Two Sum with a hash map.
5. Remove duplicates from a sorted list in place; merge two sorted lists; solve a two-pointer pair-sum problem.
6. Return one random line from a file without loading the full file and explain reservoir sampling.
7. Validate balanced parentheses with a stack; find the shortest level in an unweighted hierarchy with BFS.
8. Return the K largest values with a heap and explain the complexity trade-off.
9. Compute the deepest management level from employee → manager relationships using a graph traversal.
10. Implement basic K-means/Lloyd iterations on a small numeric matrix.
11. Parse semi-structured log lines into structured fields and handle malformed records with reusable validation helpers.
12. Load a response CSV; report shape, dtypes, missingness, duplicate IDs, and one validation that catches a silent error.
13. Calculate latency and cost summaries by model version with named `groupby().agg()` operations.
14. Merge responses with evaluation labels using merge validation; calculate false-negative rate by language with safe denominators.
15. Write a reusable function for precision, recall, false-negative rate, and support for any slice.
16. Plot weekly safety-error rate and flag weeks above a rolling baseline.
17. Compare experiment variants with bootstrap confidence intervals.
18. Diagnose whether an apparent treatment gain hides a safety regression by segment.
19. Estimate a weighted population-quality metric from an unequal-probability sampling frame.
20. Calculate reviewer agreement and identify the rubric version or segment with the most disagreement.
21. Build retrieval precision@k curves by retriever version.
22. Build an error-taxonomy table by model, language, severity, and error type with counts and rates.
23. Detect drift in language and query-type mix across months using a stated statistic and threshold.
24. Train a simple harmful-case baseline with a leakage-safe split; evaluate calibration and threshold trade-offs.
25. Convert timestamps, group by week, calculate rolling metrics, and reconcile the result with a SQL version.
26. Build a cohort table from signup and activity months; keep users without activity visible where appropriate.
27. Create segment guardrails and weighted aggregate estimates.
28. Train logistic-regression and tree/boosting baselines; compare precision, recall, PR-AUC, calibration, and threshold choices.

## Statistics and experimentation

1. Explain conditional probability and Bayes rule with a support-escalation example.
2. Compute and interpret expected value and variance; contrast binomial and normal models.
3. Explain the Central Limit Theorem and when it supports inference.
4. Define experimental, randomization, and analysis units for a recommendation experiment.
5. Define a primary metric and guardrails; explain power, minimum detectable effect, and why peeking is dangerous.
6. Explain the problem solved by multiple-testing correction and when Holm/Bonferroni-style control is appropriate.
7. Bootstrap a confidence interval for a treatment-control difference and explain its assumptions.
8. Identify treatment, control, and attrition risks in an educational or product experiment.
9. Explain p-values, confidence intervals, Type I/II errors, statistical significance, and practical significance.
10. Explain confounders, mediators, and colliders; distinguish regression adjustment from causal identification.
11. Explain Difference-in-Differences and its parallel-trends assumption.
12. Explain regression discontinuity, matching, and why matching is not randomization.
13. Distinguish trend from seasonality; compare MAE, RMSE, and MAPE; state why forecasting validation respects time order.

## Machine learning and LLM systems

1. Compare supervised and unsupervised learning with examples.
2. Define overfitting; show how to detect and reduce it.
3. Explain train/validation/test separation, regularization, and L1 versus L2.
4. Explain precision, recall, specificity, F1, ROC-AUC, and PR-AUC; choose metrics for an imbalanced problem.
5. Compare linear and logistic regression; explain the loss optimized by logistic regression.
6. Explain decision-tree splits, Gini versus entropy, random forests, and gradient boosting/XGBoost.
7. Explain K-means, its objective, choice of K, feature scaling, and PCA.
8. Explain target leakage, categorical encoding, scaling, random/grouped/time-based cross-validation, and calibration.
9. Explain SVM margin intuition, the kernel trick, KNN, and Naive Bayes.
10. Explain gradient descent, cross-entropy, neural-network learning, CNNs, RNNs/LSTMs, embeddings, and self-supervised learning.
11. Explain attention and transformer intuition without relying on architecture jargon.
12. Compare covariate shift, concept drift, training-serving skew, and delayed labels in production monitoring.
13. Compare reinforcement learning, contextual bandits, and full RL; explain exploration versus exploitation.
14. Explain Bayesian optimization and why it suits expensive continuous search spaces.
15. Design a retrieval-evaluation plan using queries, retrieval results, generated answers, and reviewer labels; include precision@k, faithfulness, quality, safety, abstention, latency, and cost.
16. Design an error-analysis process for a model-quality and safety system, including slices, sample-size guardrails, and escalation criteria.

## Product, system design, and cases

1. Design a support-ticket escalation classifier: target, data, features, primary metric, guardrail, failure costs, and threshold decision.
2. Predict support-case reopening; identify leakage risks and a validation strategy.
3. Choose logistic regression, random forest, or boosting for a tabular churn problem and defend the trade-off.
4. Segment streaming users; choose features and explain when clustering would mislead.
5. Investigate a 12% week-over-week engagement decline.
6. Design an experiment for a new recommendation algorithm, including variants, metrics, guardrails, analysis plan, and launch criteria.
7. Diagnose strong offline performance with poor production performance using a structured decision tree.
8. Design an automated support-ticket routing model end to end.
9. Forecast next month's support volume by category, including baseline and uncertainty.
10. Design query embeddings for an internal knowledge-search system: training data, positives/negatives, retrieval metric, and evaluation.
11. Design a recommendation/ranking system: candidate generation, labels, leakage prevention, features, baseline, ranking, diversity/novelty, A/B test, cold start, monitoring, and rollback.
12. Diagnose an 8% offline improvement paired with lower customer completion; decide rollback versus relaunch evidence.
13. Evaluate a policy change when an A/B test is impossible.

## Technical communication

1. Explain the analytical goal, data grain, denominator, and main caveat before showing a query or model.
2. State a result in two interview-ready sentences: finding, uncertainty or guardrail, and recommended next action.
3. Explain why a `LIMIT 3` query is not equivalent to a per-group top-three window query.
4. Explain why an inner join, a LEFT JOIN, and a many-to-many join change the meaning of a metric.
5. Narrate time and space complexity while solving a coding problem.
6. Defend a metric or model choice against a plausible alternative.
7. Summarize an experiment result without overstating a subgroup result.
8. Give a concise rollback recommendation using observed evidence and remaining uncertainty.
