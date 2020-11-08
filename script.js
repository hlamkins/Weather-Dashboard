

$('#submit').on('click', function() {
	console.log('click');
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
			'http://api.openweathermap.org/data/2.5/uvi?lat=' +
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
			
		$('#date1').html(d);
       	$('.temp1').text("Temperature: " + tempOne.toFixed(1) + '\u00B0 F');
		$('.humid1').html("Humidity: " + response.daily[1].humidity + "%");


        })

		
		let date = moment().format('l');

		$('.city').html('<h1>' + response.name + ' ' + '(' + date + ')'); 
		
		let tempF = (response.main.temp - 273.15) * 1.8 + 32;
		
		$('.temperature').text('Temperature: ' + tempF.toFixed(1) + '\u00B0 F');

		$('.humidity').html('Humidity: ' + response.main.humidity + '%');

        $('.wind').html('Wind Speed: ' + response.wind.speed + ' MPH');
        


	});
});

