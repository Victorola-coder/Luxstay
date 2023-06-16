import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { cards } from "../../utilities/data";
import { Card } from "../../utilities";
import { Link } from "react-router-dom";

export function ViewProducts() {
	useEffect(() => {
		const prevButtonRef = document.querySelector(".goPrev");
		const nextButtonRef = document.querySelector(".goNext");
		const prevButton = document.querySelector(".swiper-button-prev");
		const nextButton = document.querySelector(".swiper-button-next");
		function prevControl() {
			prevButton.click();
		}
		function nextControl() {
			nextButton.click();
		}
		prevButtonRef.addEventListener("click", prevControl);
		nextButtonRef.addEventListener("click", nextControl);

		return () => {
			nextButtonRef.removeEventListener("click", nextControl);
			prevButtonRef.removeEventListener("click", prevControl);
		};
	}, []);

	return (
		<section className="container mx-auto my-6 px-2">
			<Swiper
				slidesPerView={"auto"}
				spaceBetween={15}
				pagination={{
					clickable: true,
					type: "fraction",
				}}
				modules={[Pagination, Navigation]}
				navigation={true}
				className="cursor-grabbing"
			>
				<div className="absolute top-0 z-30 h-full flex items-center justify-center">
					<button className="goPrev rounded-full">
						<div className="active:scale-75 transition-all duration-300 bg-white/80 z-50 rounded-full p-2 shadow-lg text-amber-900 border-2 border-sandy-brown hover:bg-white/95 ease-in-out">
							<ChevronLeftIcon className="w-6 h-6" />
						</div>
					</button>
				</div>
				{cards.map((card, index) => (
					<SwiperSlide className="max-w-md h-full py-5" key={index}>
						<Link to={card.route}>
							<Card {...card} />
						</Link>
					</SwiperSlide>
				))}
				<div className="absolute top-0 z-30 h-full flex items-center justify-center right-0">
					<button className="goNext rounded-full">
						<div className="active:scale-75 transition-all duration-300 bg-white/80 z-50 rounded-full p-2 shadow-lg text-amber-900 border-2 border-sandy-brown hover:bg-white/95 ease-in-out">
							<ChevronRightIcon className="w-6 h-6" />
						</div>
					</button>
				</div>
			</Swiper>
			<div className="flex justify-center mt-6">
				<button className="w-full bg-sandy-brown/30 white px-4 py-2 rounded-md shadow-md font-bold border-2 border-sandy-brown/40 text-amber-900 max-w-md hover:bg-sandy-brown/50 transition-all duration-300 active:scale-90">
					View More...
				</button>
			</div>
		</section>
	);
}
