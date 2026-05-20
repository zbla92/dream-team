---
template: followup_2_value
subject: "RE: {{initial_subject}}"
when_to_use: Day +10. Drop a small piece of useful insight specific to their product or stack. NEVER ask for the meeting again here — earn the reply with value.
variables:
  - first_name
  - company
  - value_add_observation
  - value_add_link
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

Not pinging again about the call — different angle.

While poking around {{company}}, I noticed {{value_add_observation}}. We hit a near-identical thing on a past project — wrote up how we solved it: {{value_add_link}}

Might or might not be useful to whoever owns that area on your side. Share freely.

— {{sender_first_name}}

---
{{sender_name}} · {{brand}} · {{sender_email}} · {{sender_phone}}
{{site_url}}/pitch?ref=mail&sender={{sender_slug}}
{{physical_address}}

Don't want these? Reply "unsubscribe" and we won't write again.
