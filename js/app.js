// map은 set과 비슷함!
// set은 only value에 관한 값만 add
// map은 key-value를 사용할 수 있음!

const map = new Map();
map.set("this is key", "this is value");
map.set("this is key", "this is value2");   // set으로 key value를 덮어 쓸 수 있음
console.log(map);

console.log(map.has("this is key"));    // true
console.log(map.has("this is value"));  // false, has는 key를 탐색
console.log(map.get("this is key"));    // value는 get()을 통해 접근