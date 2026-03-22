import { buildMailto } from "@/lib/mailto";

import { SITE } from "./site";

/** General contact — same structure as event-updates: subject + editable body template. */
export const mailtoGeneral = buildMailto(SITE.email, {
  subject: "Contact — Roots Connect website",
  body: `Hello,

I'm reaching out regarding:

[Your question or topic]

Kind regards,
`,
});

export const mailtoEventUpdates = buildMailto(SITE.email, {
  subject: "Events updates — Roots Connect",
  body: `Hello,

Please keep me informed about upcoming Roots Connect events.

Kind regards,
`,
});
