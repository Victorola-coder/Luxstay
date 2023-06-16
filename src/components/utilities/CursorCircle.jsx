import React, { useState, useEffect } from "react";

const CursorCircle = () => {
	const [position, setPosition] = useState({
		x: window.innerWidth / 2,
		y: window.innerHeight / 2,
	});
	const [isIdle, setIsIdle] = useState(false);
	const [isInitialLoad, setIsInitialLoad] = useState(true);

	let timeoutId;

	const handleMouseMove = (event) => {
		clearTimeout(timeoutId);
		setPosition({ x: event.clientX, y: event.clientY });
		setIsIdle(false);
		setIsInitialLoad(false);
		timeoutId = setTimeout(() => {
			setIsIdle(true);
		}, 1000); // Adjust the delay duration as needed
	};

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			clearTimeout(timeoutId);
		};
	}, []);

	return (
		<>
			<div
				className={`fixed z-50 transform -translate-x-1/2 -translate-y-1/2 ${
					isIdle
						? "h-6 w-6"
						: isInitialLoad
						? "h-10 w-10 animate-pulse"
						: "h-4 w-4"
				} bg-verdigris/50 rounded-full pointer-events-none transition-all duration-300`}
				style={{ left: `${position.x}px`, top: `${position.y}px` }}
			></div>
		</>
	);
};

export default CursorCircle;
