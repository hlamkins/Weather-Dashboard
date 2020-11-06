

$("#submit").on("click", function(){
 console.log("hey")
 let searchInput = $("#search").val();

    let queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid=67027d10adc311be082d01770137fd84";
    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "json"

    }).then(function(response) {
       console.log(response);

       $(".city").html("<h1>" + response.name)
       let tempF = (response.main.temp - 273.15) * 1.8 + 32;

       $(".temperature").text("Temperature: " + tempF.toFixed(1) + '\u00B0 F');
      
    });
}) 

