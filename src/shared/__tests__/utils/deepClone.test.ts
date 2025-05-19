import { deepClone } from "@/shared/utils";
import { test, expect } from "vitest";

test("creates deeply cloned copy of an object", () => {
  const objMock = {
    name: "test name",
    value: "test value",
  };

  const objClone = deepClone(objMock);

  expect(objClone).toEqual(objMock);
  expect(objClone === objMock).toBe(false);
});
