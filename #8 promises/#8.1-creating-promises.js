const testPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "done");
});

console.log(testPromise);

setInterval(console.log, 1000, testPromise);
