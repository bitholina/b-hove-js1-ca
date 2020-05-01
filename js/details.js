const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
  id = params.get("id");
} else {
  document.location.href = "/";
}

const baseUrl = "https://ghibliapi.herokuapp.com/";
const filmsUrl = `${baseUrl}films/`;
const detailsUrl = `${filmsUrl}${id}`;

fetch(detailsUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    createFilmDetails(json);
  })
  .catch(function (error) {
    const heading = document.querySelector("h1");
    heading.innerHTML = "An error occured";
    console.dir(error);
  });

function createFilmDetails(details) {
  const heading = document.querySelector("h1");
  heading.innerText = `Title: ${details.title}`;

  const description = document.querySelector(".description");
  description.innerHTML = `Description: ${details.description}`;

  const rtScore = document.querySelector(".rt_score");
  rtScore.innerText = `RT Score: ${details.rt_score}`;

  const release = document.querySelector(".release");
  release.innerText = `Year: ${details.release_date}`;
}
