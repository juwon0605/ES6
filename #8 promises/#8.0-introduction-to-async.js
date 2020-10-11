const hello = fetch("http://google.com");

console.log("something");
// fetch에서 에러가 발생하지만 something이 출력됨
// 자바스크립트의 비동기성(aync)의 예
// 자바스크립트는 프로그램의 실행을 멈추지 않음
// 동시적으로 실행되는 구조
console.log(hello);
