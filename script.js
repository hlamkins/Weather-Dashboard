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
        
        let futureURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + searchInput + '&appid=67027d10adc311be082d01770137fd84';
        
        $.ajax({
            url: futureURL,
            method: 'Get',
            dataType: 'json'
        }).then(function(response) {
            console.log(response);

           //add code to log results to weather cards

        })


		$('.city').html('<h1>' + response.name); //add current date to this and possible weather icon

		let tempF = (response.main.temp - 273.15) * 1.8 + 32;
		$('.temperature').text('Temperature: ' + tempF.toFixed(1) + '\u00B0 F');

		$('.humidity').html('Humidity: ' + response.main.humidity + '%');

        $('.wind').html('Wind Speed: ' + response.wind.speed + ' MPH');
        


	});
});

