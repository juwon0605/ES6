// function에 *를 붙이면 generator function
// yield는 return과 유사
// yield를 통해 여러 value return list를 만들 수 있다!
function* listPeople(){
    yield "a";
    yield "b";
    yield "c";
    yield "d";
    yield "e";
}

const listG = listPeople();
console.log(listG); // 직접적으로는 value에 접근할 수 없음
console.log(listG.next()); // value(or undefined), done(false/true)-마지막 여부
console.log(listG.next()); // b, false
console.log(listG.next()); // c, false
console.log(listG.next()); // d, false
console.log(listG.next()); // e, false
console.log(listG.next()); // undefined, true

// 어플리케이션 개발 같은 데에는 잘 쓰이지 않음
// async await와 같이 라이브러리 함수를 개발할때 사용될 수도...?

const friends= ["a", "b", "c", "d", "e"];
function* friendTeller() {
    for (const friend of friends) {
        yield friend;
    }
}
const friendLooper = friendTeller();
console.log(friendLooper.next()); // a, false
console.log(friendLooper.next()); // b, false
console.log(friendLooper.next()); // c, false
console.log(friendLooper.next()); // d, false
console.log(friendLooper.next()); // e, false
console.log(friendLooper.next()); // unedfiend, true