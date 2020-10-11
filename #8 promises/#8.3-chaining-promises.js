// Chaining
/* 
const testPromoise = new Promise((resolve, reject) => {
  resolve(2);
});

const timesTwo = (number) => number * 2;

testPromoise
  .then((number) => {
    console.log(number * 2);
    return number * 2; // return을 해주어야 다음 then() 사용 가능
  })
  .then((otherNumber) => otherNumber * 2) // =>는 결과를 return 해줌
  .then(timesTwo) // 함수에 =>를 써서 결과를 return
  .then((theOtherNumber) => console.log(theOtherNumber));
*/

//
const testPromoise = new Promise((resolve, reject) => {
  resolve(2);
  //   reject(2);
});

const timesTwo = (number) => number * 2;

testPromoise
  .then(timesTwo) // 함수에 =>를 써서 결과를 return
  .then(timesTwo)
  .then(timesTwo)
  .then(() => {
    throw Error("Something is wrong");
  })
  .then((theOtherNumber) => console.log(theOtherNumber))
  .catch((error) => console.log(error));
