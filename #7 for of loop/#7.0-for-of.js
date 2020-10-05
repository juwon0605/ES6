const friends = ["a", "b", "c", "d"];

// 1. for loop
/* 
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}
*/

// 2. forEach loop
// forEach is only array.
/* 
const print = (current, index, array) => console.log(current, index, array);
friends.forEach(print);
*/

// 3. for of loop
// for of can const or let
for (const friend of friends) {
  console.log(friend);
}
// for of can iterable thing lik array, string, nodelist etc.
for (const alphabet of "This is very long text.") {
  console.log(alphabet);
}
// check data
for (const friend of friends) {
  if (friend === "c") {
    break;
  } else {
    console.log(friend);
  }
}
