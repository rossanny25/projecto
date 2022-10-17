var apiKey = '1448a0035743e6ddab6d44b9f7de89e4';
var language = 'es-Es';
var url = 'https://api.themoviedb.org/3/movie/popular';

function getImageMovie(poster) {
  return `https://image.tmdb.org/t/p/w500${poster}`;
}

var renderMovies = function (result) {
  let table = document.getElementsByClassName('band')[0];
  console.log(table);

  result.forEach(function (data) {
    let div = document.createElement('div');
    let a = document.createElement('a');
        a.className = 'card';

    let divThumb = document.createElement('div');
        divThumb.className = 'thumb';
        divThumb.style = `background-image: url(${this.getImageMovie(data.poster_path)})`;
        
    let article = document.createElement('article');
    let h1 = document.createElement('h1');
        h1.innerHTML = data.title;
    let p = document.createElement('p');
        p.innerHTML = data.overview;

    
    let span = document.createElement('span');
        span.innerHTML = `Popularidad: ${data.popularity}`;

    article.appendChild(h1);
    article.appendChild(p);
    article.appendChild(span);

    a.appendChild(divThumb);
    a.appendChild(article);

    div.appendChild(a);

    table.appendChild(div);   
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
