var apiKey = '1448a0035743e6ddab6d44b9f7de89e4';
var language = 'es-Es';
var url = 'http://api.themoviedb.org/3/movie/popular';

function getImageMovie(poster) {
  return `https://image.tmdb.org/t/p/w500${poster}`;
}

var renderMovies = function (result) {
  let table = document.getElementById('cul');

  result.forEach(function (data) {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let image = document.createElement('img');
    image.src = this.getImageMovie(data.poster_path);
    td1.appendChild(image);
    let td2 = document.createElement('td');
    td2.innerHTML = data.title;
    let td3 = document.createElement('td');
    td3.innerHTML = data.overview;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr);
  });
};


// Creamos un nuevo XMLHttpRequest
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let peliculas = JSON.parse(this.responseText);
    renderMovies(peliculas.results);
  }
};

// Endpoint de la API y método que se va a usar para llamar
xhttp.open("GET", url + `?api_key=${apiKey}&language=${language}`, true);
xhttp.setRequestHeader("Content-type", "application/json");
// Si quisieramos mandar parámetros a nuestra API, podríamos hacerlo desde el método send()
xhttp.send(null);
