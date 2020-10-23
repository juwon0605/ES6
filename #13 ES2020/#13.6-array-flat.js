// flat(n)은 array의 depth n개를 flat
// default는 1

let complexArr = [1, [2, 2], [[3], [[3], [3]], [[3],[3],[3]]]];
console.log(complexArr);
console.log(complexArr.flat());
console.log(complexArr.flat(2));
console.log(complexArr.flat(3));