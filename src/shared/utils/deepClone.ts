export const deepClone = <T>(object: T): T => {
  if (object instanceof Date) return object as T;
  if (typeof object !== "object" || object === null) return object;

  const newObj = (Array.isArray(object) ? [] : {}) as T;

  let key: keyof T;
  for (key in object) newObj[key] = deepClone(object[key]);

  return newObj;
};
