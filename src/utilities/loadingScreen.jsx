import logo from '../assets/images/logo.png'
import { useEffect, useState } from "react";

export default function LoadingScreen() {
	const [progress, setProgress] = useState(0);
	useEffect(() => {
		const totalTime = 5000; // Total time in milliseconds (5 seconds)
		const increment = 99 / (totalTime / 1000); // Increment percentage based on the total time
		let currentTime = 0;

		const timer = setInterval(() => {
			currentTime += 1000;
			setProgress((prevProgress) => {
				if (prevProgress < 99) {
					return prevProgress + increment;
				} else {
					clearInterval(timer);
					return prevProgress;
				}
			});
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<section className="flex flex-col items-center justify-center min-h-screen gap-5 px-3 bg-teal-100/20">
			<div>
				<img src={logo} alt="" className="w-28 h-28 animate-pulse" />
			</div>
			<div className="bg-teal-500 w-full max-w-md mx-auto rounded-md p-1 px-1 relative border-2 border-teal-200">
				<div className="absolute font-bold text-teal-200 left-0 right-0 flex items-center justify-center">
					{Math.round(progress)}%
				</div>
				<div className="h-6 font-bold text-teal-200 bg-teal-900 loadingAnimation flex items-center justify-center p-1" />
			</div>
		</section>
	);
}