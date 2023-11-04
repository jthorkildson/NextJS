import React from "react";
import Counter from "./Counter";
import SearchBar from "./SearchBar";

const App = () => {
	return (
		<div>
			<Counter incrementBy={1} buttonColor={"skyblue"}/>
			<Counter incrementBy={2} buttonColor={"goldenrod"}/>
			<SearchBar />
		</div>
	)
}

export default App