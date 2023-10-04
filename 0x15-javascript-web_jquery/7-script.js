$(document).ready(function(){
    // Define the URL for fetching character data
    const apiUrl = "https://swapi-api.alx-tools.com/api/people/5/?format=json";

    const characterDiv = $("#character");

    // Make an AJAX request to fetch character data
    $.ajax({
        url: apiUrl,
        method: "GET",
        dataType: "json",
        success: function(data) {
            // Update the content of the <div> with the character name
            characterDiv.text("Character Name: " + data.name);
        },
        error: function() {
            characterDiv.text("Character Name: Error fetching data");
        }
    });
});
