/** Recursive partial that leaves arrays and functions intact. */
export type DeepPartial<T> = T extends (...args: never[]) => unknown
  ? T
  : T extends readonly unknown[]
    ? T
    : T extends object
      ? { [K in keyof T]?: DeepPartial<T[K]> }
      : T;

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' &&
  value !== null &&
  !Array.isArray(value) &&
  Object.getPrototypeOf(value) === Object.prototype;

/**
 * Merges a partial translation over the base locale. `NoInfer` pins the shape
 * to the base locale, so a half-finished translation cannot widen the result
 * type into a partial one. Runs once at build time,
 * so the cost is irrelevant and the output is fully static.
 */
export function mergeCopy<T>(base: T, override: NoInfer<DeepPartial<T>>): T {
  if (!isPlainObject(base) || !isPlainObject(override)) {
    return (override === undefined ? base : (override as T));
  }

  const result: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(override)) {
    if (value === undefined) continue;
    result[key] = isPlainObject(value)
      ? mergeCopy(result[key], value as DeepPartial<unknown>)
      : value;
  }
  return result as T;
}
