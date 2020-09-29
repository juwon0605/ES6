// sample1
const friends = ["a", "b"];
const newFriends = [...friends, "C"];
console.log(newFriends);

// sample2
const fullName = {
  firstName: "juwon",
};
console.log({ ...fullName, lastName: "park" });
console.log(fullName);

// sample3
const first = ["mon", "tue", "Wed"];
const weekend = ["sat", "sun"];
const fullWeek = [...first, "thu", "fir", ...weekend];
console.log(fullWeek);

// sample4
// optional object property
const lastName = prompt("Last name");
const user = {
  username: "juwon",
  age: 26,
  // lastName: lastName !== "" ? lastNmae : undefined,
  ...(lastName !== "" && { lastName }),
};
console.log(user);
