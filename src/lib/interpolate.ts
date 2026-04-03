export type InterpolationParams = Record<string, string | number>;

/** Replaces `{{ key }}` in template strings (same pattern as the old JSON translations). */
export function interpolate(
  template: string,
  params?: InterpolationParams
): string {
  if (!params) return template;
  return Object.entries(params).reduce(
    (acc, [key, value]) =>
      acc.replace(new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, "g"), String(value)),
    template
  );
}
