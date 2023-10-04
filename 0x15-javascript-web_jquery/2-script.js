$(document).ready(function(){
    // Select the <div> element with id "red_header" using the jQuery API
    const redHeaderDiv = $("#red_header");

    // Add a click event handler to the selected <div>
    redHeaderDiv.click(function(){
        // Select the <header> element using the jQuery API
        const headerElement = $("header");

        headerElement.css("color", "#FF0000");
    });
});
