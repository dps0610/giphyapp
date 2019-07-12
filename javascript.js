// create topics array (fill it with a bunch of somethings)
var topics = ["Clue", "Blade Runner 2049", "Gremlins", "Gremlins 2", "Drive", "Logan", "Mad Max Fury Road", "My Cousin Vinny", "Detective Pikachu", "There Will be Blood", "Tombstone", "Godzilla"];

// generate buttons upon page load
$(document).ready(function(){
    for (let i = 0; i < topics.length; i++) {
        var buttons = $("<button>");
        buttons.text(topics[i]);
        $("#buttons-go-here").append(buttons);
        var movieName = topics[i];
        $(buttons).attr("data-name", movieName);
        $(buttons).attr("class", "m-1 btn-info rounded")
    }
})
// add attributes to the buttons (class & styling, something denoting the name as an attribute)