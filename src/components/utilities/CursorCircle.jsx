import React, { useState, useEffect } from "react";

const CursorCircle = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (event) => {
			setPosition({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div
			className="fixed top-0 left-0 w-6 h-6 bg-verdigris/50 rounded-full pointer-events-none z-50"
			style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
		/>
	);
};

export default CursorCircle;
