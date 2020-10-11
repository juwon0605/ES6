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

// then -> async/await
// catch -> try/catch
// finially
const getMoviesAsync = async () => {
  try {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json");
    const json = await response.json();
    console.log(json);
    throw Error("this is error");
  } catch (e) {
    console.log(e);
  } finally {
    console.log("done");
  }
};

getMoviesAsync();
