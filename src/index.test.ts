import { describe, expect, it } from "vitest";
import { hello } from "./index.js";

describe("hello", () => {
  it('returns "hello, from mr hulla!" by default', () => {
    expect(hello()).toBe("hello, from mr hulla!");
  });

  it("greets a given name", () => {
    expect(hello("ada")).toBe("hello, from ada!");
  });
});
