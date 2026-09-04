import { describe, expect, it } from "vitest";
import { hello } from "./index.js";

describe("hello", () => {
  it('returns "yo, from mr hulla!" by default', () => {
    expect(hello()).toBe("yo, from mr hulla!");
  });

  it("greets a given name", () => {
    expect(hello("ada")).toBe("yo, from ada!");
  });
});
