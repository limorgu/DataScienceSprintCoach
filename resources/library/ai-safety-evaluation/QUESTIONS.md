# AI Safety and Evaluation Questions

Use a concrete evaluation plan: define the decision, failure cost, unit of analysis, metrics, segmentation, and next action. These prompts are based on the Sprint's AI-quality, human-review, SQL-metrics, and model-evaluation practice.

## Evaluation framing and rubrics

1. Define the user task and unacceptable failure modes for an AI-assisted support workflow.
2. Separate helpfulness, factuality, policy compliance, and user harm in one evaluation rubric.
3. Write a five-level rubric for whether an answer is grounded in supplied evidence.
4. Explain why a single “quality score” can hide important safety failures.
5. Define the evaluation unit for a multi-turn assistant conversation.
6. Choose an error taxonomy before reviewing model outputs.
7. Design a test set that represents common, rare, and high-severity requests.
8. Explain how severity and frequency should both influence prioritization.
9. Define what counts as a refusal that is safe but unhelpful.
10. Define what counts as a helpful answer that is nevertheless unsafe.
11. Turn an ambiguous “make it safer” request into measurable acceptance criteria.
12. Explain the difference between a rubric criterion and a release threshold.
13. Specify which examples should be excluded from evaluation and why.
14. Choose between binary labels, ordinal labels, and pairwise preferences for answer quality.
15. Explain how to evaluate an answer when evaluators reasonably disagree on the ideal response.
16. Design a separate rubric for answer relevance and for answer safety.
17. Define evidence required before claiming a reduction in harmful outputs.
18. Explain when a synthetic evaluation set is useful and when it is insufficient.
19. Design a privacy-safe evaluation dataset without using real user content.
20. Explain how the evaluation task changes when errors have asymmetric costs.

## Human review and label quality

21. Annotations show low agreement. State the diagnostic sequence before retraining a model.
22. Calculate and interpret inter-annotator agreement for a categorical safety label.
23. Explain why high agreement can still coexist with a bad labeling policy.
24. Design a calibration exercise for human evaluators before production labeling.
25. Decide when adjudication is appropriate and how to record the final label.
26. Find the rubric wording most likely to create inconsistent labels.
27. Explain how class imbalance affects agreement statistics.
28. Design a sampling plan to ensure reviewers see rare, severe failures.
29. Separate reviewer error from true ambiguity in the task definition.
30. Explain how evaluator fatigue can bias a long labeling task.
31. Propose a quality-control process for a new annotation vendor.
32. Define a blind-review design that reduces expectation bias.
33. Explain how to audit whether reviewers apply a safety rule consistently across languages or formats.
34. Decide how many examples to double-label and why.
35. Explain the trade-off between detailed rubrics and annotation speed.
36. Design a dispute log that improves the next version of the annotation guide.
37. Identify a label-leakage risk in an evaluation dataset.
38. Explain when “unknown” should be an allowed label rather than forcing a judgment.
39. Design a review process for a high-severity false negative.
40. Explain how to validate that label-quality improvements are real rather than caused by easier samples.

## Metrics, thresholds, and segmentation

41. Define precision, recall, false-positive rate, and false-negative rate for a safety classifier.
42. Choose a decision threshold when false negatives have much higher cost than false positives.
43. Explain why accuracy is weak for a rare harmful event.
44. Define a safety rate with a clear numerator, denominator, and exclusions.
45. Use a confusion matrix to compare two policy thresholds.
46. Explain when precision-recall curves are more informative than ROC curves.
47. Design segment cuts that can reveal a hidden safety regression.
48. Explain why a global metric can improve while a vulnerable segment worsens.
49. Define a guardrail metric for refusal over-triggering.
50. Explain how to compare model versions with different traffic volumes.
51. Choose a confidence interval for a rare-event safety rate and explain its limits.
52. Explain why a model should not be ranked by a small-sample rate alone.
53. Define a metric for unsupported claims when answers can contain multiple claims.
54. Explain the denominator problem when some outputs cannot be evaluated.
55. Design a metric that combines severity-weighted errors with raw error counts.
56. Explain the risk of optimizing only for evaluator preference scores.
57. Identify a metric that could be gamed by overly short answers.
58. Design a quality-versus-latency decision table for three model versions.
59. Explain how cost per successful safe task differs from cost per response.
60. State the evidence needed to call a metric stable enough for a release decision.

## Failure analysis and red teaming

61. Design an error-analysis table for unsupported answers, unsafe answers, and unnecessary refusals.
62. Prioritize three failure clusters using severity, volume, and fixability.
63. Explain how to distinguish retrieval failure from generation failure.
64. Investigate a spike in harmful outputs after a prompt change.
65. Design adversarial tests for instruction conflict and prompt injection.
66. Explain why red-team examples must not become the entire evaluation set.
67. Create a test plan for multi-turn attempts to bypass a safety boundary.
68. Investigate whether a failure is caused by missing context, incorrect reasoning, or policy ambiguity.
69. Design a regression suite that prevents a fixed safety failure from returning.
70. Explain how to test for safe behavior when the correct response is to abstain.
71. Define an evidence trace needed to audit an unsupported answer.
72. Compare a targeted slice evaluation with random sampling for incident investigation.
73. Design a root-cause analysis after a high-severity incident.
74. Explain the risk of testing only English-language or short-form prompts.
75. Write a plan to test whether a safeguard creates new user-experience failures.
76. Decide whether prompt revision, retrieval improvement, model change, or policy rule is the first intervention.
77. Explain how to evaluate a fallback path when confidence is low.
78. Design a stress test for long context, conflicting sources, and incomplete evidence.
79. Explain why an apparently successful refusal can still fail the user.
80. Define the documentation needed for a safety incident review.

## Launch, monitoring, and governance

81. Define pre-launch gates for quality, safety, latency, cost, and reviewer agreement.
82. Explain why an offline improvement does not by itself justify a broader rollout.
83. Design a limited rollout with a rollback trigger.
84. Choose monitoring metrics for the first week after launch.
85. Explain how you would detect data drift, prompt drift, and behavior drift.
86. Design an alert for a sudden rise in severe failures without alert fatigue.
87. Explain how delayed human-review labels affect monitoring.
88. Design a dashboard that separates volume changes from rate changes.
89. State who owns the decision to pause or roll back a deployment.
90. Explain how to communicate uncertainty in a safety recommendation.
91. Define a post-launch audit sample and cadence.
92. Explain how to preserve a reproducible record of the model, prompt, data, and policy version.
93. Design a change-management plan for updating a rubric after launch.
94. Explain how an evaluation benchmark can become stale.
95. Decide when a high-severity issue requires immediate mitigation before root cause is known.
96. Define an escalation path for a safety signal that is statistically uncertain but potentially severe.
97. Explain how to balance transparency with protecting sensitive evaluation details.
98. Propose a quarterly review of safety thresholds and failure taxonomy.
99. Present a recommendation when safety improves but task completion falls.
100. Give a concise release recommendation with evidence, residual risk, guardrails, and next measurement.
