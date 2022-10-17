var apiKey = '1448a0035743e6ddab6d44b9f7de89e4';
var language = 'es-Es';
var url = 'https://api.themoviedb.org/3/movie/popular';

function getImageMovie(poster) {
  return `https://image.tmdb.org/t/p/w500${poster}`;
}

var renderMovies = function (result) {
  let table = document.getElementsByClassName('more-pupulate')[0];

  result.forEach(function (data) {
    let div = document.createElement('div');
        div.className = 'image-desc';
        div.style = 'margin-top: 5px; margin-bottom: 5px;'
    let img = document.createElement('img');
        img.src =  this.getImageMovie(data.poster_path);
        img.style = 'max-height:150px; width:100%;';


    div.appendChild(img);


    table.appendChild(div);
  });
};


// Creamos un nuevo XMLHttpRequest
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let peliculas = JSON.parse(this.responseText);
    let slicedArray = peliculas.results.slice(0, 4);
    renderMovies(slicedArray);
  }
};

// Endpoint de la API y método que se va a usar para llamar
xhttp.open("GET", url + `?api_key=${apiKey}&language=${language}`, true);
xhttp.setRequestHeader("Content-type", "application/json");
// Si quisieramos mandar parámetros a nuestra API, podríamos hacerlo desde el método send()
xhttp.send(null);
