$(document).ready(function(){
    const redHeaderDiv = $("#red_header");

    // Add a click event handler to the selected <div>
    redHeaderDiv.click(function(){
        // Select the <header> element using the jQuery API
        const headerElement = $("header");

        headerElement.addClass("red");
    });
});
