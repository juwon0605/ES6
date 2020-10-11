// finally() in resolve
/*
const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "First");
})
  .then((value) => console.log(value))
  .catch((e) => console.log(e))
  .finally(() => console.log("done"));
*/

// finally() in reject
const p1 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "p1 is rejected");
})
  .then((value) => console.log(value))
  .catch((e) => console.log(e))
  .finally(() => console.log("done"));
