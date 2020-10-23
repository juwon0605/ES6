// sort()는 array의 순서를 바꿔서 저장!

const fruits = ["apple", "strawberry", "avocado"];

const sortFruitByLength = (fruitA, fruitB) => {
    return fruitA.length - fruitB.length;
}

const sortFruitByLengthReverse = (fruitA, fruitB) => {
    return fruitB.length - fruitA.length;
}

console.log(fruits);
console.log(fruits.sort(sortFruitByLength));
console.log(fruits.sort(sortFruitByLengthReverse));

const people = [
    {
        name:"a",
        age:26
    },
    {
        name:"b",
        age:24
    },
    {
        name:"c",
        age:28
    }
]

const orderPeopleByAge = (personA, personB) => {
    return personA.age - personB.age;
}

// console.log(people);
console.log(people.sort(orderPeopleByAge));