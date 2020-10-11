// Promise.all() : [ argument 순서대로 ] then 결과값을 return
/* 
const p1 = new Promise((resolve) => {
  setTimeout(resolve, 5000, "First");
});

const p2 = new Promise((resolve) => {
  setTimeout(resolve, 1000, "Second");
});

const p3 = new Promise((resolve) => {
  setTimeout(resolve, 3000, "Third");
});

const motherPromise = Promise.all([p1, p2, p3]);
motherPromise.then((values) => console.log(values));
*/

const p1 = new Promise((resolve) => {
  setTimeout(resolve, 5000, "First");
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "p2 is rejected");
});

const p3 = new Promise((resolve) => {
  setTimeout(resolve, 3000, "Third");
});

const motherPromise = Promise.all([p1, p2, p3]);
motherPromise
  .then((values) => console.log(values))
  .catch((err) => console.log(err));
