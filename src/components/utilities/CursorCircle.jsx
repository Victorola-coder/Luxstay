import React, { useState, useEffect } from "react";

const CursorCircle = () => {
	const [position, setPosition] = useState({
		x: window.innerWidth / 2,
		y: window.innerHeight / 2,
	});
	const [isIdle, setIsIdle] = useState(false);
	const [isInitialLoad, setIsInitialLoad] = useState(true);
	const [mousePressed, setMousePressed] = useState(false);

	let timeoutId;
	let rippleTimeOut;

	const handleMouseMove = (event) => {
		clearTimeout(timeoutId);
		setPosition({ x: event.clientX, y: event.clientY });
		setIsIdle(false);
		setIsInitialLoad(false);
		timeoutId = setTimeout(() => {
			setIsIdle(true);
		}, 1000);
	};

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);

		window.addEventListener("mousedown", mouseAction);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mousedown", mouseAction);
			clearTimeout(timeoutId);
		};
	}, [mousePressed]);

	function mouseAction() {
		setMousePressed(true);
		rippleTimeOut = setTimeout(() => {
			setMousePressed(false);
		}, 1000);
	}

	return (
		<>
			<div
				className={` fixed z-50 transform -translate-x-1/2 -translate-y-1/2 ${
					isIdle
						? "h-6 w-6"
						: isInitialLoad
						? "h-10 w-10 animate-pulse"
						: "h-4 w-4"
				} bg-verdigris/50 rounded-full pointer-events-none transition-all duration-300`}
				style={{ left: `${position.x}px`, top: `${position.y}px` }}
			/>
			{mousePressed && (
				<div
					className="ripple fixed h-[100px] w-[100px] rounded-full bg-verdigris/30 z-50 pointer-events-none transition-all duration-300"
					style={{ left: `${position.x}px`, top: `${position.y}px` }}
				/>
			)}
		</>
	);
};

export default CursorCircle;
