// yts.mx 사이트에 정의되어 있는 promise()를 fetch로 사용해보기
const getMoviesPromise = () => {
  fetch("https://yts.mx/api/v2/list_movies.json")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => console.log(json))
    .catch((e) => console.log(e));
};

// use async/await
const getMoviesAsync = async () => {
  // resolve를 받지 못하고 return -> <pending>
  const response = fetch("https://yts.mx/api/v2/list_movies.json");
  console.log(response);

  // await는 resolve를 기다리다가 값을 받고 return
  const response2 = await fetch("https://yts.mx/api/v2/list_movies.json");
  console.log(response2);

  // 아래와 같이 .json() 사용 가능 : await 2번 써야함
  const response3 = await fetch("https://yts.mx/api/v2/list_movies.json");
  const json = await response3.json();
  console.log(json);
};
// (==) async function getMovies() {}

getMoviesAsync();
