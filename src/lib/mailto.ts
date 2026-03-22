/**
 * Build a mailto: URL with subject/body (UTF-8 via URLSearchParams).
 */
export function buildMailto(
  email: string,
  params: { subject?: string; body?: string },
): string {
  const search = new URLSearchParams();
  if (params.subject) search.set("subject", params.subject);
  if (params.body) search.set("body", params.body);
  const q = search.toString();
  return `mailto:${email}${q ? `?${q}` : ""}`;
}
