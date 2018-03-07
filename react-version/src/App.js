import React from "react"; // importing React object from react package inside package.json

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "99dbe65f9b8c7fb33a5eb3cb94684501";


class App extends React.Component {  // creates instance of App that extends React.Component
	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		error: undefined
	}

	getWeather = async (e) => {
		e.preventDefault();

		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;

		const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

		const responseData = await apiCall.json();
		console.log(responseData);

		this.setState({
			temperature: responseData.main.temp,
			city: responseData.name,
			country: responseData.sys.country,
			humidity: responseData.main.humidity,
			description: responseData.weather[0].description,
			error: ""
		});
	}

	render() {
		return (
			<div>
				<Titles />
				<Form getWeather={this.getWeather}/> {/* setting props to call getweather function */}
				<Weather
					temperature={this.state.temperature}
					city={this.state.city}
					country={this.state.country}
					humidity={this.state.humidity}
					description={this.state.description}
					error={this.state.error}
				/>
			</div>
		);
	}
};

export default App;
