// Promise.race() : [ argument 중에서 ] 가장 빠른 then 결과값을 return
// 심지어 promise중에 에러가 있어도 가장 빠른 then 결과값을 return

const p1 = new Promise((resolve) => {
  setTimeout(resolve, 5000, "First");
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(reject, 10000, "p2 is rejected");
});

const p3 = new Promise((resolve) => {
  setTimeout(resolve, 3000, "Third");
});

const motherPromise = Promise.race([p1, p2, p3]);
motherPromise
  .then((values) => console.log(values))
  .catch((err) => console.log(err));
