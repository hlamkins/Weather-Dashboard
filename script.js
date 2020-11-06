

$("#submit").on("click", function(){
 console.log("hey")
 let searchInput = $("#search").val();

    let queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid=67027d10adc311be082d01770137fd84";
    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "json"

    }).then(function(response) {
        console.log(queryURL);
        console.log(response);
    
    });
}) 

