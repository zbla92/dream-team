---
template: initial_post_funding
subject: "{{company}} just raised — quick eng question"
when_to_use: Within 30 days of a public Series A/B announcement
variables:
  - first_name
  - company
  - funding_round
  - funding_date_phrase
  - relevant_case_study_url
  - relevant_case_study_label
  - sender_first_name
  - sender_name
  - sender_slug
  - sender_phone
  - sender_email
  - brand
  - site_url
  - physical_address
---

Hi {{first_name}},

Saw {{company}} closed your {{funding_round}} {{funding_date_phrase}} — congrats.

Most teams in that spot need to ship 18 months of roadmap in 6, without staffing up a 12-person agency that hands you off to juniors at week three.

We're three senior engineers (10+ years each) who build the work ourselves — same three, every week. Specialists on call by the hour when we need DevOps, AI, or design. No agency middle layer.

Recent work that might pattern-match: {{relevant_case_study_label}} → {{relevant_case_study_url}}

Worth 20 minutes next week?

— {{sender_first_name}}

---
{{sender_name}} · {{brand}} · {{sender_email}} · {{sender_phone}}
{{site_url}}/pitch?ref=mail&sender={{sender_slug}}
{{physical_address}}

Don't want these? Reply "unsubscribe" and we won't write again.
