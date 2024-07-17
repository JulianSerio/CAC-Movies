$(document).ready(function() {
    const apiKey = '646d9f4931970ef23c10fb6b33c1410a';
    let currentPage = 1;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=`;

    function fetchMoviesTendencias(page) {
        $.get(url + page, function(data) {
            const movies = data.results;
            let movieHtml = '';
            movies.forEach(movie => {
                
                const title = movie.title;
                const posterPath = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image';
                movieHtml += `
                <div class="peliculas">
                    <a href="./pages/detalle.html">
                        <div class="pelicula" >
                            <img src="${posterPath}" alt="${title}">
                            <div class="titulo-peliculas">
                                <h4 class="nombres">${title}</h4>
                            </div> 
                        </div>
                    </a>
                </div>
                `;
            });
            $('.contenedor-peliculas').html(movieHtml);
        });
    }

    $('#btnAnterior').click(function() {
        if (currentPage > 1) {
            currentPage--;
            fetchMoviesTendencias(currentPage);
        }
    });

    $('#btnSiguiente').click(function() {
        currentPage++;
        fetchMoviesTendencias(currentPage);
    });

    fetchMoviesTendencias(currentPage);
    console.log("Tendencias cargadas");
});



