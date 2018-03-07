import React from "react"; // importing React object from react package inside package.json

class App extends React.Component {  // creates instance of App that extends React.Component
	render() {
		return (
			<div>
				<p>Hello!</p>
				<h1>YO!</h1>
			</div>
		);
	}
};

export default App;
