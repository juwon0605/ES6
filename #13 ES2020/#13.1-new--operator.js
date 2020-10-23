// MDN nullish coalescing operator (??)에서 document 참고
// 지원 안되는 브라우저도 있음
let name; // undefined

console.log("hello", name);                 // hello undefined

// or operator는 0이나 ""을 false라고 판단함
console.log("hello", name || "anonymous");  // hello anonymous
name = 0;   // 0도 값임
console.log("hello", name || "anonymous");  // hello anonymous
name = ""
console.log("hello", name || "anonymous");  // hello anonymous

// ?? operator는 오직 변수값이 null이거나 undefined일 때만 작동함
console.log("hello", name ?? "anonymous");  // hello 
name = 0;   // 0도 값임
console.log("hello", name ?? "anonymous");  // hello 0