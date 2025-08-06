export const getNestedValue = <T, R = unknown>(
  obj: T,
  path: keyof T | string
): R | undefined => {
  if (typeof path === "string" && path.includes(".")) {
    return path.split(".").reduce((current: unknown, key) => {
      return current && typeof current === "object" && key in current
        ? (current as Record<string, unknown>)[key]
        : undefined;
    }, obj) as R | undefined;
  }
  return obj[path as keyof T] as R | undefined;
};
