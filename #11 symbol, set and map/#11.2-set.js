// object example
const user = {
    name: "juwon",
    age: 26
};
user.oneMore = true; // property 추가
user.name = null; // property 변경
console.log(user);

// set example
// set은 unique한(하게) value save
const userSet = new Set([1,2,3,4,5,5,5]);
console.log(userSet);

// set API example
// high level object처럼 사용할 수 있다
console.log(userSet.has(5));
console.log(userSet.has(6));

console.log(userSet.delete(1));
console.log(userSet);

console.log(userSet.clear());
console.log(userSet);

userSet.add("hi");
userSet.add([1,2,3,4,5]);
console.log(userSet);