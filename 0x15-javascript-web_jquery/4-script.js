$(document).ready(function(){
    // Select the <div> element with id "toggle_header" using the jQuery API
    const toggleHeaderDiv = $("#toggle_header");

    toggleHeaderDiv.click(function(){
        // Select the <header> element using the jQuery API
        const headerElement = $("header");

        headerElement.toggleClass("red green");
    });
});
