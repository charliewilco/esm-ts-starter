import { FakeMapper } from "../src";

describe("Mapper", () => {
	test("does basic size calculation", () => {
		const m = new FakeMapper();
		m.set("3", 3);
		m.set("4", 4);
		expect(m.size).toEqual(2);
	});

	test("does basic initialization", () => {
		console.log = jest.fn();
		const m = new FakeMapper();
		m.initialize();
		expect(m.size).toEqual(0);
		expect(console.log).toHaveBeenCalledWith("There you go");
	});

	test("does basic kv operations", () => {
		const m = new FakeMapper();
		m.set("3", 3);
		m.set("4", 4);
		expect(m.has("4")).toBeTruthy();
		expect(m.has("foo")).toBeFalsy();
	});
});
