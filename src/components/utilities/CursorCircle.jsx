import React, { useState, useEffect } from "react";

const CursorCircle = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isIdle, setIsIdle] = useState(false);

	let timeoutId;

	const handleMouseMove = (event) => {
		clearTimeout(timeoutId);
		setPosition({ x: event.clientX, y: event.clientY });
		setIsIdle(false);
		timeoutId = setTimeout(() => {
			setIsIdle(true);
		}, 1000);
	};

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			clearTimeout(timeoutId);
		};
	}, []);

	return (
		<div
			className={`fixed z-50 top-0 left-0 w-${isIdle ? "6" : "3"} h-${
				isIdle ? "6" : "3"
			} bg-verdigris/50 rounded-full pointer-events-none transition-all duration-300`}
			style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
		></div>
	);
};

export default CursorCircle;
