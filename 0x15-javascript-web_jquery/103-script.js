$(document).ready(function(){
    const languageCodeInput = $("#language_code");

    const translateButton = $("#btn_translate");

    const helloDiv = $("#hello");

    function fetchTranslation() {
        const languageCode = languageCodeInput.val();

        // Define the API URL with the language code
        const api = `https://www.fourtonfish.com/hellosalut/hello/?lang=${languageCode}`;

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
    }

    translateButton.click(fetchTranslation);

    languageCodeInput.keypress(function(event) {
        if (event.which === 13) {
            fetchTranslation();
        }
    });
});
