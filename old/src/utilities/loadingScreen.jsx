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
		<section className='bg-white fixed w-full inset-0 z-50'>
			<section className="flex flex-col items-center justify-center min-h-screen gap-5 px-3 bg-blue-100/20">
				<div>
					<img src={logo} alt="" className="w-28 h-28 animate-pulse" />
				</div>
				{/*<div className="bg-blue-500 w-full max-w-md mx-auto  border-blue-200">
					<div className="h-0.5 font-bold text-blue-200 bg-blue-900 loadingAnimation flex items-center justify-center p-1" />
				</div>
				<div className='text-blue-900 font-bold -mt-3'>
					{Math.round(progress)}%
	</div>*/}
			</section>
		</section>
	);
}