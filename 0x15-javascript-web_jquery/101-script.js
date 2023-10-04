$(document).ready(function(){
    $("#add_item").click(function(){
        // Create a new <li> element with the content "Item"
        const newItem = $("<li>Item</li>");

        // Append the new <li> element to the list
        $("ul.my_list").append(newItem);
    });

    // Remove the last item from the list when the user clicks on DIV#remove_item
    $("#remove_item").click(function(){
        // Select the last <li> element and remove it
        $("ul.my_list li:last-child").remove();
    });

    // Clear all items from the list when the user clicks on DIV#clear_list
    $("#clear_list").click(function(){
        // Remove all <li> elements from the list
        $("ul.my_list").empty();
    });
});
