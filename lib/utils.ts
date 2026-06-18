/**
 * Lightweight className combiner — joins truthy values with a space.
 * Avoids an extra dependency while keeping conditional classes readable.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
