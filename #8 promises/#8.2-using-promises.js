// resolve : success일 때 return (value)
// then : Promise()가 resoleve return 이후
/* 
const testPromoise = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "done");
});

testPromoise.then((value) => console.log(value));

const showValue = (value) => console.groupCollapsed(value);
testPromoise.then(showValue);
*/

// reject : fail일 때 return (error)
// catch : Promise()가 reject return 이후
const testPromoise = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, "rejected");
});

testPromoise
  .then((value) => console.log(value))
  .catch((value) => console.log(value));

const showValue = (value) => console.groupCollapsed(value);
testPromoise.then(showValue).catch(showValue);
