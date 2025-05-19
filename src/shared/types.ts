type FetchStatus = "idle" | "loading" | "error" | "success";

type FormState<T> = {
  values: T;
  status: FetchStatus;
  errors: Partial<Record<keyof T, string>>;
};

export type { FetchStatus, FormState };
