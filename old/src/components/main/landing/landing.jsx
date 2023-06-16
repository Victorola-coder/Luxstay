import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import heroImage from "../../../assets/images/house2.png";
import { CallToAction } from "./CallToAction";
import { Hero } from "./Hero";
import { Popular } from "./Popular";
import deluxe1 from "../../../assets/images/balcony.jpg";
import executive2 from "../../../assets/images/terrace.jpg";
import standard1 from "../../../assets/images/room.jpg";
import LoadingScreen from "../../../utilities/loadingScreen";

export default function Landing() {
	const [isLoading, setIsLoading] = useState(true);
	const imagePaths = [deluxe1, executive2, standard1, heroImage]; // Replace with the paths to your images

	useEffect(() => {
		const imageLoaders = imagePaths.map((path) => {
			const imageLoader = new Image();
			imageLoader.src = path;
			return new Promise((resolve) => {
				imageLoader.onload = resolve;
			});
		});

		Promise.all(imageLoaders).then(() => {
			setIsLoading(false);
		});
	}, []);

	return isLoading ? (
		<LoadingScreen />
	) : (
		<>
			<main className="my-6 overflow-x-hidden px-3">
				<Hero heroImage={heroImage} />
				<Popular
					deluxe1={deluxe1}
					executive2={executive2}
					standard1={standard1}
				/>
				<CallToAction />
			</main>
		</>
	);
}
