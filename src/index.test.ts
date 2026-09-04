import { describe, expect, it } from "vitest";
import { hello } from "./index.js";

describe("hello", () => {
  it('returns "hey, from mr hulla!" by default', () => {
    expect(hello()).toBe("hey, from mr hulla!");
  });

  it("greets a given name", () => {
    expect(hello("ada")).toBe("hey, from ada!");
  });
});
