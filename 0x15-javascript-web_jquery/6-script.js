$(document).ready(function(){
    // Select the <div> element with id "update_header" using the jQuery API
    const updateHeaderDiv = $("#update_header");

    // Add a click event handler to the selected <div>
    updateHeaderDiv.click(function(){
        // Select the <header> element using the jQuery API
        const headerElement = $("header");

        // Update the text of the <header> element
        headerElement.text("New Header!!!");
    });
});
