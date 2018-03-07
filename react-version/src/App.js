import React from "react"; // importing React object from react package inside package.json

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "99dbe65f9b8c7fb33a5eb3cb94684501";


class App extends React.Component {  // creates instance of App that extends React.Component
	getWeather = async (e) => {
		e.preventDefault();

		const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Liverpool,uk&appid=${API_KEY}`);

		const responseData = await apiCall.json();
		console.log(responseData);
	}

	render() {
		return (
			<div>
				<Titles />
				<Form getWeather={this.getWeather}/> {/* setting props to call getweather function */}
				<Weather />
			</div>
		);
	}
};

export default App;
