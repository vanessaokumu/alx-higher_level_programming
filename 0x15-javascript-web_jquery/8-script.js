$(document).ready(function(){
    // Define the URL for fetching movie data
    const api = "https://swapi-api.alx-tools.com/api/films/?format=json";

    // Select the <ul> element with id "list_movies" using the jQuery API
    const listMoviesUl = $("#list_movies");

    // Make an AJAX request to fetch movie data
    $.ajax({
        url: api,
        method: "GET",
        dataType: "json",
        success: function(data) {
            data.results.forEach(function(movie) {
                listMoviesUl.append("<li>" + movie.title + "</li>");
            });
        },
        error: function() {
            listMoviesUl.append("<li>Error fetching movie data</li>");
        }
    });
});
