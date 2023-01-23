export class FakeMapper<K, V> extends Map<K, V> {
	constructor() {
		super();
	}

	initialize() {
		console.log("There you go");
	}
}
