// property의 privacy를 위해 사용(?)
// 어플리케이션을 만들때는 사용될 일이 거의 없음
// 라이브러리 만들때 사용될 수 있을 것 같다
// Symbol()은 새로운 date type
const test1 = Symbol();
const test2 = Symbol();

console.log(test1 === test2); // false

console.log(test1);
console.log(test2);

const test3 = Symbol("just description not value");
console.log(test3); // log에 description 

const test4 = Symbol("just description not value");
console.log(test3 === test4); // faluse

const superBigObj = {
    // Symbol을 통해 특정 속성을 unique하게 만들어 줄 수 있음
    [Symbol("juwon")]: {
        something: true
    },
    // 위와 아래는 서로 같지 않음. Symbol을 통해 각자 unique한 속성
    [Symbol("juwon")]: {
        something: true
    },
    duplication: {
        able: false   
    },
    // 아래는 위와 완전 동일하게 취급
    duplication: {
        able: false
    }
};

console.log(superBigObj);

// superBigObj["juwon"].something = false; // error
superBigObj["duplication"].able = true;
console.log(superBigObj);
