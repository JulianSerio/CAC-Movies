document.addEventListener('DOMContentLoaded', async () => {
    
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const response = await fetch('http://localhost:8080/app/peliculas', options);
    const data = await response.json();
    const movies = data;
    console.log(data);
    let currentPage = 1;

    const tbody = document.getElementById('tbody');

       movies.forEach(movie => {
        // creamos un tr
        const tr = document.createElement('tr');
        // creamos un td con el titulo de la pelicula
        const tdTitle = document.createElement('td');
        tdTitle.textContent = movie.titulo;
        // creamos un td con la duracion de la pelicula
        const tdDuration = document.createElement('td');
        tdDuration.textContent = movie.duracion;
        // creamos un td con los generos de la pelicula
        const tdGenres = document.createElement('td');
        tdGenres.textContent = movie.genero;
        // creamos un td con la imagen de la pelicula

        const tdImageUrl = document.createElement('td');
        tdImageUrl.textContent = movie.imagen;
        // añadimos los td al tr

        tr.appendChild(tdTitle);
        tr.appendChild(tdGenres);
        tr.appendChild(tdDuration);
        tr.appendChild(tdImageUrl);
        // añadimos el tr a al body
        tbody.appendChild(tr);

    });
    
});
