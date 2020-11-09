

$('#submit').on('click', function() {
	let searchInput = $('#search').val();

	


	let queryURL =
		'https://api.openweathermap.org/data/2.5/weather?q=' + searchInput + '&appid=67027d10adc311be082d01770137fd84';

	$.ajax({
		url: queryURL,
		method: 'GET',
		dataType: 'json'
	}).then(function(response) {
		console.log(response);

		let lat = response.coord.lat;
		let lon = response.coord.lon;

		let uvURL =
			'https://api.openweathermap.org/data/2.5/uvi?lat=' +
			lat +
			'&lon=' +
			lon +
			'&appid=67027d10adc311be082d01770137fd84';

		$.ajax({
			url: uvURL,
			method: 'GET',
			dataType: 'json'
		}).then(function(response) {
			console.log(response);

            $('.uvindex').html('UV Index: ' + response.value);
             

		});
		
		
		
        let futureURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exlcude=minutely,alerts,hourly&appid=67027d10adc311be082d01770137fd84';
        
        $.ajax({
            url: futureURL,
            method: 'Get',
            dataType: 'json'
        }).then(function(response) {
            console.log(response);

		let tempOne = (response.daily[1].feels_like.day - 273.156) * 1.8 + 32;	
		let d = moment().add(1, 'day').format('l');

		let weatherIcon1 = response.daily[1].weather[0].icon;
		let iconURL1 = "https://openweathermap.org/img/wn/" + weatherIcon1 + ".png";

		let weatherIcon2 = response.daily[2].weather[0].icon;
		let iconURL2 = "https://openweathermap.org/img/wn/" + weatherIcon2 + ".png";

		let weatherIcon3 = response.daily[3].weather[0].icon;
		let iconURL3 = "https://openweathermap.org/img/wn/" + weatherIcon3 + ".png";

		let weatherIcon4 = response.daily[4].weather[0].icon;
		let iconURL4 = "https://openweathermap.org/img/wn/" + weatherIcon4 + ".png";

		let weatherIcon5 = response.daily[5].weather[0].icon;
		let iconURL5 = "https://openweathermap.org/img/wn/" + weatherIcon5 + ".png";
			
		$('#date1').html(d);
		$('.icon1').html('<img src=' + iconURL1 + '>');
       	$('.temp1').text("Temperature: " + tempOne.toFixed(1) + '\u00B0 F');
		$('.humid1').html("Humidity: " + response.daily[1].humidity + "%");

		let tempTwo = (response.daily[2].feels_like.day - 273.156) * 1.8 + 32;	
		let d2 = moment().add(2, 'day').format('l');
			
		$('#date2').html(d2);
		$('.icon2').html('<img src=' + iconURL2 + '>');
       	$('.temp2').text("Temperature: " + tempTwo.toFixed(1) + '\u00B0 F');
		$('.humid2').html("Humidity: " + response.daily[2].humidity + "%");

		let tempThree = (response.daily[3].feels_like.day - 273.156) * 1.8 + 32;	
		let d3 = moment().add(3, 'day').format('l');
			
		$('#date3').html(d3);
		$('.icon3').html('<img src=' + iconURL3 + '>');
       	$('.temp3').text("Temperature: " + tempThree.toFixed(1) + '\u00B0 F');
		$('.humid3').html("Humidity: " + response.daily[3].humidity + "%");

		let tempFour = (response.daily[4].feels_like.day - 273.156) * 1.8 + 32;	
		let d4 = moment().add(4, 'day').format('l');
			
		$('#date4').html(d4);
		$('.icon4').html('<img src=' + iconURL4 + '>');
       	$('.temp4').text("Temperature: " + tempFour.toFixed(1) + '\u00B0 F');
		$('.humid4').html("Humidity: " + response.daily[4].humidity + "%");

		let tempFive = (response.daily[5].feels_like.day - 273.156) * 1.8 + 32;	
		let d5 = moment().add(5, 'day').format('l');
			
		$('#date5').html(d5);
		$('.icon5').html('<img src=' + iconURL5 + '>');
       	$('.temp5').text("Temperature: " + tempFive.toFixed(1) + '\u00B0 F');
		$('.humid5').html("Humidity: " + response.daily[5].humidity + "%");





        });

		
		

	
		
		let date = moment().format('l');

		let weatherIcon = response.weather[0].icon;
		let iconURL = "https://openweathermap.org/img/wn/" + weatherIcon + ".png";
		
		
		$('.city').html('<h1>' + response.name + ' ' + '(' + date + ')  ' + '<img src=' + iconURL + '>');
		
		let tempF = (response.main.temp - 273.15) * 1.8 + 32;
		
		$('.temperature').text('Temperature: ' + tempF.toFixed(1) + '\u00B0 F');

		$('.humidity').html('Humidity: ' + response.main.humidity + '%');

        $('.wind').html('Wind Speed: ' + response.wind.speed + ' MPH');
		
		
	 
	

	});

	localStorage.setItem("city", searchInput);

	for (let i = 0; i < localStorage.length; i++) {
		
		
		$("#localOutput").html(searchInput);
	}
	

	
});

