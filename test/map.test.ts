import { FakeMapper } from "../src";

describe("Mapper", () => {
  it("does basic size calculation", () => {
    const m = new FakeMapper();
    m.set("3", 3);
    m.set("4", 4);
    expect(m.size).toEqual(2);
  });

  it("does basic kv operations", () => {
    const m = new FakeMapper();
    m.set("3", 3);
    m.set("4", 4);
    expect(m.has("4")).toBeTruthy();
    expect(m.has("foo")).toBeFalsy();
  });
});
