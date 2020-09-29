// spread array
/* 
const friends = [1, 2, 3, 4];
// console.log(friends);
// console.log(...friends);

const family = ["a", "b", "C"];
// console.log(friends + family);
// console.log([friends, family]);

console.log([...friends, ...family]);
*/

// spread object
const handsome = {
  name: "juwon",
  age: 26,
};

const hello = {
  handsome: true,
  hello: "hello",
};

console.log({ ...handsome, ...hello });
