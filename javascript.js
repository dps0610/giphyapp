// create topics array (fill it with a bunch of somethings)
var topics = ["Clue", "Blade Runner 2049", "Gremlins", "Gremlins 2", "Blade Runner", "Point Break", "Mad Max Fury Road", "My Cousin Vinny", "Detective Pikachu", "There Will be Blood", "Indiana Jones", "Godzilla King of the Monsters"];

// generate buttons upon page load
$(document).ready(function(){
    createButtons();
})
// creates the buttons 
function createButtons(){
    for (let i = 0; i < topics.length; i++) {
        var buttons = $("<button>");
        buttons.text(topics[i]);
        $("#buttons-go-here").append(buttons);
        var movieName = topics[i];
        $(buttons).attr("data-name", movieName);
        $(buttons).attr("class", "m-1 btn-info rounded");
    };
};
//make buttons make gifs
$("#buttons-go-here").on("click", ".btn-info", function(){
    $("#gifs-go-here").empty();

    var buttonChoice = $(this).attr("data-name");
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + buttonChoice + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        .then(function(response){
            var results = response.data;
            for (let i = 0; i < results.length; i++){
                //var ratings = $("<p>");
                //$(ratings).text("Rating: " results[i].rating);
                var gifs = $("<img>");
                var defaultgif = results[i].images.fixed_width_still.url;
                $(gifs).attr("src", defaultgif);
                $(gifs).attr("data-state-animated", results[i].images.fixed_width.url);
                $(gifs).attr("data-state-still", results[i].images.fixed_width_still.url);
                $(gifs).attr("data-state", "still")
                $(gifs).attr("class", "float-left m-1 gif");
                //$("#gifs-go-here").append(ratings);
                $("#gifs-go-here").append(gifs);
            }
           
    });
})

$("#submit").on("click", function(){
    $("#buttons-go-here").empty();
    event.preventDefault();
    var newTopic = $("#input").val().trim();
    //console.log(newTopic);
    topics.push(newTopic);
    createButtons();
})

$("#gifs-go-here").on("click", ".gif", function(){
    //console.log("hey");

    var state = $(this).attr("data-state");

      if (state === "still"){
          $(this).attr("src", $(this).attr("data-state-animated"));
          $(this).attr("data-state", "animate");
      } else {
          $(this).attr("src", $(this).attr("data-state-still"));
          $(this).attr("data-state", "still");
      }
})