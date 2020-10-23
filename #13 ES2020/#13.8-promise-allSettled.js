// Promise.all example
// 모든 fetch가 성공해야 .then 실행
// 하나라도 실패하면 .catch 실행
// 모든 promise들이 서로 연관되어 있을 때 사용
const p1 = Promise.all([
    fetch("https://yts.mx/api/v2/list_movies.json"),
    fetch("https://yts.mx/api/v2/list_movies.json"),
    fetch("https://yts.mx/api/v2/list_movies.json"),
])
.then(response => console.log("all succes!", response))
.catch(e => console.log("error:", e));

// Promise.allSettled example
// fetch가 성공하는 것은 .then 실행
// fetch가 실패하는 것은 .catch 실행
// 모든 promise들이 서로 독립적일 때 사용
const p2 = Promise.allSettled([
    fetch("https://yts.mx/api/v2/list_movies.json"),
    fetch("https://yts.mx/api/v2/list_movies.json"),
    fetch("https://"),
])
.then(response => console.log("at least succes!", response))
.catch(e => console.log("error:", e));