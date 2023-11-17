import React, { useState } from "react";
import "./Counter.css"

const Counter = (props) => {
	const [currentCount, setCurrentCount] = useState(0)
	const handleClick = () => {
		setCurrentCount(currentCount + props.incrementBy)
		if (currentCount >= 10) {
			setCurrentCount(0)
		}
	}

	const buttonStyles = {
		background: props.buttonColor,
		borderRadius: "10px",
	}

	return (
		<div id="container">
			<button style={buttonStyles} onClick={handleClick}>
				+{props.incrementBy}
			</button>
			<div id="count">{currentCount}</div>
		</div>
	)
}

export default Counter