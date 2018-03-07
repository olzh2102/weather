// Init weather object
const weather = new Weather('Boston', 'MA');
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//weather.changeLocation('Miami', 'FL');

function getWeather() {
	weather.getWeather()
		.then(results => {
			ui.paint(results);
			//console.log(results.display_location.full);
		})
		.catch(err => console.log(err));
}
