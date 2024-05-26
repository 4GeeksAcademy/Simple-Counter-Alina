import React, { useState, useEffect, useRef } from "react";
import NumberDivs from "./numbers";
 
const Home = () => {
    const [count, setCount] = useState(0);
 
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);
 
        return () => clearInterval(interval);
    }, [count]);

	const stringNumber = count.toString().padStart(5,'0')


	const myRef = useRef(null);

	useEffect(() => {
		myRef.current.addEventListener('change', handleClick);
		
	}, []);

	const handleClick = (event) => {
		console.log('Clicked!');
	};

	return <button ref={myRef}>Click me</button>;

	return (
		<div className="d-flex grid gap-4 justify-content-center align-items-center vh-100 bg-dark ">
			<NumberDivs id={stringNumber.charAt(0)}/>
			<NumberDivs id={stringNumber.charAt(1)}/>
			<NumberDivs id={stringNumber.charAt(2)}/>
			<NumberDivs id={stringNumber.charAt(3)}/>
			<NumberDivs id={stringNumber.charAt(4)}/>
		</div>
	)
}

export default Home;
