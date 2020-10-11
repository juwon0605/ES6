// yts.mx 사이트에 정의되어 있는 promise()를 fetch로 사용해보기
const getMoviesPromise = () => {
  fetch("https://yts.mx/api/v2/list_movies.json")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => console.log(json))
    .catch((e) => console.log(e))
    .finally(() => console.log("done"));
};

// then -> async/await
// catch -> try/catch
// finially
// + paraller (use destructering)
const getMoviesAsync = async () => {
  try {
    const [moviesResponse, suggestionsResponse] = await Promise.all([
      fetch("https://yts.mx/api/v2/list_movies.json"),
      fetch("https://yts.mx/api/v2/movie_suggestions.json?movie_id=1000"),
    ]);
    const [movies, sugestions] = await Promise.all([
      moviesResponse.json(),
      suggestionsResponse.json(),
    ]);
    console.log(movies, sugestions);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("done");
  }
};

getMoviesAsync();
