/*
fetch("https://google.com") // google은 fetch를 허용하지 않음
  .then((response) => console.log(response))
  .catch((e) => console.log(e));
*/

/*
fetch("http://127.0.0.1:8080") // localhost:8080이 접속이 안되는데 이유를 모르겠음...
  .then((response) => console.log(response.text())) // reponse.text()는 promise를 return -> then()
  .then((result) => console.log(result))
  .catch((e) => console.log(e));
*/

// yts.mx 사이트에 정의되어 있는 promise()를 fetch로 사용해보기
fetch("https://yts.mx/api/v2/list_movies.json")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((json) => console.log(json))
  .catch((e) => console.log(e));
