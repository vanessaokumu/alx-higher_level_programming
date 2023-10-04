$(document).ready(function(){
    // Select the <div> element with id "add_item" using the jQuery API
    const addItemDiv = $("#add_item");

    // Add a click event handler to the selected <div>
    addItemDiv.click(function(){
        // Create a new <li> element with the content "Item"
        const newItem = $("<li>Item</li>");

        // Select the <ul> element with the class "my_list" using the jQuery API
        const myList = $("ul.my_list");

        myList.append(newItem);
    });
});
