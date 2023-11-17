import React from "react";
import Counter from "./Counter/Counter";
import SearchBar from "./SearchBar/SearchBar";


const App = () => {
	return (
		<div>
			<Counter incrementBy={1} buttonColor={"skyblue"}/>
			<Counter incrementBy={2} buttonColor={"goldenrod"}/>
			<a href="https://github.com/jthorkildson/NextJS">Source Code</a>
			<SearchBar />
		</div>
	)
}

export default App