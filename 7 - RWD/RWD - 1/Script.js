// apiKey = 9813ce01a72ca1bd2ae25f091898b1c7
// url = https://api.themoviedb.org/3
// path = /discover/movie?sort_by=popularity.desc

//https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7

//https://image.tmdb.org/t/p/w500/

const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/w500/";
const path = "/discover/movie?sort_by=popularity.desc";
const apiUrl = url + path + apiKey;

const main = document.getElementById("main");

getMovies(apiUrl);
function getMovies(url) {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.results);
      showMovie(data.results);
    });
}

function showMovie(data) {
  main.innerHTML = "";
  data.forEach((movie) => {
    const { title, poster_path } = movie;
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `<img src="${imgPath + poster_path}" alt="Move" />
        <h4 id="moveName">${title}</h4>`;
    // console.log(title);

    main.appendChild(movieElement);
  });
}
//DetailsPage
