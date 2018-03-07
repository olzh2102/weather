import React from "react"; // importing React object from react package inside package.json

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

class App extends React.Component {  // creates instance of App that extends React.Component
	render() {
		return (
			<div>
				<Titles />
				<Form />
				<Weather />
			</div>
		);
	}
};

export default App;
