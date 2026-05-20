---
template: followup_1_bump
subject: "RE: {{initial_subject}}"
when_to_use: Day +4 after initial. Short bump only. Threaded reply, not new thread.
variables:
  - first_name
  - initial_subject
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

Floating this back up in case it got buried.

Short version: three senior engineers, no agency, no swap, specialists on the bench by the hour. 20 minutes — yes or no is fine.

— {{sender_first_name}}

---
{{sender_name}} · {{brand}} · {{sender_email}} · {{sender_phone}}
{{site_url}}/pitch?ref=mail&sender={{sender_slug}}
{{physical_address}}

Don't want these? Reply "unsubscribe" and we won't write again.
