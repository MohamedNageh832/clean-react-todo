import { ZodSchema } from "zod";

type Result<T extends ZodSchema> = {
  isValid: boolean;
  errors: Partial<Record<keyof T["_type"], string>>;
};

export const validate = <T extends ZodSchema>(
  schema: T,
  input: unknown
): Result<T> => {
  const validation = schema.safeParse(input);

  return {
    isValid: validation.success,
    errors: {},
  };
};
