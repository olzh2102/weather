// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', setWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (event) => {
	const city = document.getElementById('city').value;
	const state = document.getElementById('state').value;

	// Change location in LS
	weather.changeLocation(city, state);

	//Set locaiton in LS
	storage.setLocationData(city, state);


	// Get and display weather
	setWeather();

	// Close modal
	$('#locModal').modal('hide');
});

//weather.changeLocation('Miami', 'FL');

function setWeather() {
	weather.getWeather()
		.then(results => {
			ui.paint(results);
			//console.log(results.display_location.full);
		})
		.catch(err => console.log(err));
}
