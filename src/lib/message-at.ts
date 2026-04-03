import type { Messages } from "@/messages/en";

/** Resolve a dotted path like `events.evt1.title` on typed messages. */
export function messageAt(messages: Messages, dotted: string): string {
  const parts = dotted.split(".");
  let cur: unknown = messages as unknown;
  for (const p of parts) {
    if (cur && typeof cur === "object" && p in (cur as object)) {
      cur = (cur as Record<string, unknown>)[p];
    } else {
      return dotted;
    }
  }
  return typeof cur === "string" ? cur : dotted;
}
