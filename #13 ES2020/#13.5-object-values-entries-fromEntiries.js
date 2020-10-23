// object values
// object entries
const person = {
    name: "juwon",
    age: 26
}

console.log(Object.values(person));
console.log(Object.entries(person));

Object.entries(person).forEach(item => {
    console.log(item[0], item[1]);
});

// object fromEntries
console.log(Object.fromEntries([["name", "juwon"], ["age", 26]]));