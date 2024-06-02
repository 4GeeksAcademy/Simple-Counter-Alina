import React, { useState, useEffect, useRef } from "react";
import NumberDivs from "./numbers";
 
const Home = () => {
    const [count, setCount] = useState(0);
	const [variable, setVariable] = useState("sum")
	const [paused, setPaused] = useState(false)
	const [buttonText, setButtonText] = useState ("stop")
	const [buttonClass, setButtonClass] = useState("btn-outline-danger")
 
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev)=>{
				if (!paused) {
					switch (variable) {
						case "sum": 
							prev++
							break;
						
						case "subtract":
							prev--
							break;
					}
				}
			return prev});
        }, 1000);
		if (variable == "subtract" && count < 0){
			setPaused(true)
			setCount(0)
			alert("Time is up!")
		} 
 
        return () => clearInterval(interval);
    }, [count, paused, variable]);

	const stringNumber = count.toString().padStart(5,'0')

	function pause(event) {
	
		if (paused === false) {
			setPaused(true)
			setButtonText("play")
			setButtonClass("btn-outline-success")
		} else {
			setPaused(false)
			setButtonText("stop")
			setButtonClass("btn-outline-danger")
		}
	} 
	

	function reset () {
		setVariable("sum")
		setCount(0)
	}

	function counter (event) {
		const inputValue = event.target.parentNode.firstElementChild.value
		setCount(inputValue)
		setVariable("subtract")
		setPaused(false)
	}
	
	return (
		<div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark ">
			<div className="d-flex grid gap-4 numberSize w-100 justify-content-center">
				<NumberDivs id={stringNumber.charAt(0)}/>
				<NumberDivs id={stringNumber.charAt(1)}/>
				<NumberDivs id={stringNumber.charAt(2)}/>
				<NumberDivs id={stringNumber.charAt(3)}/>
				<NumberDivs id={stringNumber.charAt(4)}/>
			</div>
			<div className="d-flex flex-column mt-5">
				<button onClick={reset} className="btn btn-secondary">Click me to reset</button>
				<div>

					<button onClick={pause} className={`btn ${buttonClass} w-100 mt-2`}>Click me to {buttonText}</button>
				</div>
				<div className="mt-2 d-flex">
					<input type="number" step="5" className="form-control me-2"/> 
					<button onClick={counter} className="btn btn-secondary w-100">Set counter</button>
				</div>
			</div>
		</div>
	)
}

export default Home;
