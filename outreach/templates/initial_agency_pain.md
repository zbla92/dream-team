---
template: initial_agency_pain
subject: "the senior dev you met → the junior who ships"
when_to_use: Only when there is real public evidence they've been burned by an agency (e.g. CTO post on LinkedIn, podcast comment, public RFP language). Direct hook — high reply rate when on-target, looks tone-deaf when not.
variables:
  - first_name
  - company
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

Every founder we've talked to has the same story. They meet a sharp senior engineer in the pitch. They sign. Week three, the actual work is going to two devs they've never met.

We built {{brand}} as the opposite shape. Three senior engineers (10+ years each) — the same three, every week, end to end. No agency layer, no PM filter, no bait-and-switch. Specialists plug in by the hour when we need DevOps, AI, or design depth, and you approve every hour before they start.

One that gives you the texture: {{relevant_case_study_label}} → {{relevant_case_study_url}}

If {{company}} has been through that switch once and doesn't want a repeat, 20 minutes next week?

— {{sender_first_name}}

---
{{sender_name}} · {{brand}} · {{sender_email}} · {{sender_phone}}
{{site_url}}/pitch?ref=mail&sender={{sender_slug}}
{{physical_address}}

Don't want these? Reply "unsubscribe" and we won't write again.
