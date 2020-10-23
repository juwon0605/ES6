// pad means padding
let hours = 12;
let minute = 5;
let seconds = 8;

console.log(`${hours}h:${minute}m:${seconds}s`);
console.log(`${hours}h:${minute < 10 ? `0${minute}` : minute}m:${seconds < 10 ? `0${seconds}` : `${seconds}`}s`);
// padStart(원하는 길이, 부족할 경우 채울 문자)
console.log(`${hours}h:${String(minute).padStart(2, "0")}m:${String(seconds).padStart(2,"0")}s`);

//padEnd(원하는 길이, 부족할 경우 채울 문자)
let strNum = "8";
console.log(strNum.padStart(2, "0").padEnd(3,"S"));

// padStart, padEnd는 변수를 변형하지 않음
console.log(strNum);