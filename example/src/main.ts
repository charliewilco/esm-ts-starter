import { FakeMapper } from "../../src";
const app = document.querySelector<HTMLDivElement>("#app")!;

const m = new FakeMapper().set("#app", app);

console.log(m);
