$(document).ready(function(){
    $("#btn_translate").click(function(){
        // Get the language code entered by the user
        const languageCode = $("#language_code").val();

        // Define the API URL with the language code
        const api = `https://www.fourtonfish.com/hellosalut/hello/?lang=${languageCode}`;

        // Select the DIV#hello element using the jQuery API
        const helloDiv = $("#hello");

        // Make an AJAX request to fetch the translation
        $.ajax({
            url: api,
            method: "GET",
            dataType: "json",
            success: function(data) {
                // Display the translation in the DIV#hello
                helloDiv.text(`Translation of "Hello": ${data.hello}`);
            },
            error: function() {
                helloDiv.text("Translation of \"Hello\": Error fetching translation");
            }
        });
    });
});
