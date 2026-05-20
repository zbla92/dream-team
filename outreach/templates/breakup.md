---
template: breakup
subject: "RE: {{initial_subject}}"
when_to_use: Day +21. Final touch. Designed to either earn a reply or close the loop cleanly.
variables:
  - first_name
  - company
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

Closing the loop on this thread — I'll stop pinging.

If timing is just bad, reply with a month and I'll come back then. If we're not a fit, no need to reply at all — silence is a fine answer, and we won't keep writing.

If something changes for {{company}} on engineering capacity in the next 6 months, our door is open: {{site_url}}/pitch?ref=mail&sender={{sender_slug}}

Wishing you a good build.

— {{sender_first_name}}

---
{{sender_name}} · {{brand}} · {{sender_email}} · {{sender_phone}}
{{site_url}}
{{physical_address}}

Don't want these? Reply "unsubscribe" and we won't write again.
