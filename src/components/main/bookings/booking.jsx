import deluxe1 from "../../../assets/images/deluxeroom1.jpg";
import executive2 from "../../../assets/images/executivelounge2.jpg";
import standard1 from "../../../assets/images/standardroom1.jpg";

import LoadingScreen from "../../../utilities/loadingScreen";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	TvIcon,
	WifiIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BedIcon } from "../../icons/BedIcon";
import { FoodIcon } from "../../icons/FoodIcons";
import { Card } from "../../../utilities/Card";

export default function Bookings() {
	const cards = [
		{
			id: 1,
			image: deluxe1,
			title: "Deluxe Room",
			ratings: [true, true, true, true, false],
			price: 300,
			utilities: [WifiIcon, TvIcon, FoodIcon, BedIcon],
			available: true,
		},
		{
			id: 2,
			image: executive2,
			title: "Executive Lounge",
			ratings: [true, true, true, true, true],
			price: 500,
			utilities: [WifiIcon, TvIcon, FoodIcon],
			available: true,
		},
		{
			id: 3,
			image: standard1,
			title: "Standard Room",
			ratings: [true, true, true, false, false],
			price: 200,
			utilities: [TvIcon, FoodIcon, BedIcon],
			available: true,
		},
		{
			id: 4,
			image: deluxe1,
			title: "Deluxe Room",
			ratings: [true, true, true, true, false],
			price: 300,
			utilities: [WifiIcon, TvIcon, FoodIcon, BedIcon],
			available: true,
		},
		{
			id: 5,
			image: executive2,
			title: "Executive Lounge",
			ratings: [true, true, true, true, true],
			price: 500,
			utilities: [WifiIcon, TvIcon, FoodIcon],
			available: true,
		},
		{
			id: 6,
			image: standard1,
			title: "Standard Room",
			ratings: [true, true, true, false, false],
			price: 200,
			utilities: [TvIcon, FoodIcon, BedIcon],
			available: true,
		},
	];
	// useEffect(() => {
	// 	const prevButtonRef = document.querySelector(".goPrev");
	// 	const nextButtonRef = document.querySelector(".goNext");
	// 	const prevButton = document.querySelector(".swiper-button-prev");
	// 	const nextButton = document.querySelector(".swiper-button-next");
	// 	function prevControl() {
	// 		prevButton.click();
	// 	}
	// 	function nextControl() {
	// 		nextButton.click();
	// 	}
	// 	prevButtonRef.addEventListener("click", prevControl);
	// 	nextButtonRef.addEventListener("click", nextControl);

	// 	return () => {
	// 		nextButtonRef.removeEventListener("click", nextControl);
	// 		prevButtonRef.removeEventListener("click", prevControl);
	// 	};
	// }, []);

	const [isLoading, setIsLoading] = useState(true);
	const imagePaths = [deluxe1, executive2, standard1]; // Replace with the paths to your images

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
		<main className="container mx-auto">
			<section className="grid md:grid-cols-3 gap-y-6 mb-10 mt-5 max-md:grid-cols-2 max-sm:grid-cols-1">
				{cards.map((card, index) => (
					<div className="w-fit mx-auto" key={index}>
						<Card data={card} />
					</div>
				))}
			</section>
		</main>
	);
}
