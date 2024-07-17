$(document).ready(function() {
    const apiKey = '646d9f4931970ef23c10fb6b33c1410a';
    let currentPage = 1;
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=es-ES&page=`;

    function fetchMoviesAclamadas(page) {
        $.get(url + page, function(data) {
            const movies = data.results;
            let movieHtml = '';
            movies.forEach(movie => {
                const title  =movie.title;
                const posterPath = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image';
                movieHtml += `
                <div class="aclamada">
                    <img src="${posterPath}" alt="${title}">
                </div>
                `;
            });
            $('.aclamadas').html(movieHtml);
        });
    }

    fetchMoviesAclamadas(currentPage);
    console.log("Top rated cargadas");
});