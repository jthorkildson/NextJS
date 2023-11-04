import React, { useState } from "react";

const SearchBar = () => {
	const [searchValue, setSearchValue] = useState("")
	const handleInput = (event) => {
		setSearchValue(event.target.value)
	}

	return (
		<div>
			<input type="text" value={searchValue} onChange={handleInput}/>
		</div>
	)
}

export default SearchBar