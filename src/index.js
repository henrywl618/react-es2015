import { choice, remove } from "./helpers";
import foods from "./foods";

const randFruit = choice(foods);

console.log(`I'd like one ${randFruit}, please.`)
console.log(`Here you go: ${randFruit}`)
console.log(`Delicious! May I have another?`)

const fruitsLeft = remove(foods,randFruit);

console.log(`I'm sorry, we're all out. We have ${fruitsLeft.length} left.`);