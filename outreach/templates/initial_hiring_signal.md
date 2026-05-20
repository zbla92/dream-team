---
template: initial_hiring_signal
subject: "{{role_signal}} — covering it while you hire?"
when_to_use: Their careers page has had a senior eng role open for 60+ days
variables:
  - first_name
  - company
  - role_signal
  - role_open_weeks
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

Noticed {{company}}'s {{role_signal}} role has been open about {{role_open_weeks}}. Senior hires in this market are running 3–4 months end to end — the roadmap doesn't wait that long.

We're three senior engineers, 10+ years each. We drop into existing teams for 4–12 weeks, ship the feature you can't hire fast enough for, and hand it back clean. Same three of us, no swap, no agency layer.

One that's close to your stack: {{relevant_case_study_label}} → {{relevant_case_study_url}}

Would 20 minutes next week make sense?

— {{sender_first_name}}

---
{{sender_name}} · {{brand}} · {{sender_email}} · {{sender_phone}}
{{site_url}}/pitch?ref=mail&sender={{sender_slug}}
{{physical_address}}

Don't want these? Reply "unsubscribe" and we won't write again.
