// rest sample1
const infiniteArgs = (...args) => console.log(args);
infiniteArgs("1", 2, true, "lalala", [1, 2, 3, 4]);

// rest sample2
const bestFriendMaker = (firstOne, ...rest) => {
  console.log(`My best friend is ${firstOne}`);
  console.log(rest);
};
bestFriendMaker("a", "b", "c", "d", "e");
