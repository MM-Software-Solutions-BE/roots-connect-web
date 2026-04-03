import type { Locale } from "@/i18n/config";

import type { Messages } from "./en";
import { en } from "./en";
import { nl } from "./nl";

export type { Messages } from "./en";

export function getMessages(locale: Locale): Messages {
  return locale === "en" ? en : nl;
}
