const result1 = {
    name: "juwon1",
    profile: {
        email: "@something.com"
    }
}

const result2 = {
    name: "juwon2"
}

console.log(result1.profile.email); // @something.com
console.log(result2.profile);       // undefined
// console.log(result2.profile.email); // error(cannot read property of undefined)
console.log(result2.profile && result2.profile.email); // error 방지 -> 깊게 접근할수록 구문이 너무 길어질 수 있음

// ?라는 optional chaining operator를 사용!
// API를 받아올 때 사용하면 매우 유용함!
console.log(result1?.profile?.email);
console.log(result2?.profile?.email);