import { describe, expect, it } from "vitest";
import { hello } from "mr-hulla-core";

describe("cli wiring", () => {
  it("resolves hello from the mr-hulla-core workspace package", () => {
    expect(hello("ada")).toBe("yo, from ada!");
  });
});
