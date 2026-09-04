import { describe, expect, it } from "vitest";
import { hello } from "./index.js";

describe("hello", () => {
  it('returns "hello, from mr hulla!"', () => {
    expect(hello()).toBe("hello, from mr hulla!");
  });
});
