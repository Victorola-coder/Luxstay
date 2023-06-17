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
						<Link to={`/bookings/${index + 1}`}>
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
				<Link to="/bookings" className="w-full mx-auto max-w-md">
				<button className="bg-sandy-brown/30 rounded-lg p-2 w-full max-w-sm mt-2 border-2 border-sandy-brown transition-all duration-300 hover:bg-sandy-brown/40 font-bold hover:shadow-lg shadow active:scale-90 hover:scale-105">
						View More...
					</button>
				</Link>
			</div>
		</section>
	);
}
