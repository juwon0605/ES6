// trim은 string 자체를 바꾸지 않음
// trimStart() example
let longEmptyStr1 = "                               lalala";
console.log(longEmptyStr1);
console.log(longEmptyStr1.trimStart());
console.log(longEmptyStr1);


// trimEnd() example
let longEmptyStr2 = "                               lalala                               ";
console.log(longEmptyStr2);
console.log(longEmptyStr2.trimStart().trimEnd());
console.log(longEmptyStr2);


// trim() exmaple
console.log(longEmptyStr2);
console.log(longEmptyStr2.trim());
console.log(longEmptyStr2);
