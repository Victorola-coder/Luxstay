import heroImage from "../../assets/images/house2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import {
	PlayIcon,
	StarIcon,
	TvIcon,
	WifiIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from "@heroicons/react/24/solid";
import deluxe1 from "../../assets/images/deluxeroom1.jpg";
import deluxe2 from "../../assets/images/deluxeroom2.jpeg";
import executive1 from "../../assets/images/executivelounge1.jpg";
import executive2 from "../../assets/images/executivelounge2.jpg";
import standard1 from "../../assets/images/standardroom1.jpg";
import standard2 from "../../assets/images/standardroom2.jpg";
import { StarOutline } from "heroicons-react";

export default function Landing() {
	return (
		<main className="my-6 overflow-x-hidden px-3">
			<section className="container mx-auto bg-tealBG/30 rounded-t-3xl overflow-x-hidden rounded-b-md border">
				<div className="flex justify-between max-md:flex-col-reverse md:flex-row">
					<div className="w-full md:hidden px-3 pb-6">
						<div className=" bg-white w-full max-w-md mx-auto rounded-full overflow-hidden border-2 flex flex-row border-teal-400/20 focus-within:border-teal-400/50 transition-all duration-300 ">
							<input
								type="text"
								className="py-3 w-full px-3 focus:outline-none placeholder:font-bold text-teal-900 font-bold"
								placeholder="Search... e.g Luxurious"
							/>
							<button className="bg-teal-500 px-10 text-teal-900 font-bold rounded-full">
								Search
							</button>
						</div>
					</div>
					<div className="w-full max-w-lg md:p-16 max-md:px-3 max-md:pb-5">
						<h1 className="md:text-5xl font-medium text-slate-700 mt-10 flex md:flex-col max-md:flex-row flex-wrap max-md:text-3xl max-md:text-center max-md:justify-center">
							<div className="">Find your perfect</div>
							<div>place to stay</div>
						</h1>
						<p className="text-slate-700 md:mt-10 md:text-left max-md:text-center max-md:mt-5">
							Lorem ipsum dolor sit amet consectetur adipiscing
							elit. Sunt nisi voluptate, provident adipiscing
							similique quis.
						</p>
						<div className="md:mt-6 max-md:mt-3">
							<button className="flex items-center gap-2 hover:bg-white hover:border w-fit rounded-full pr-3 pl-1 py-0.5 transition-all duration-300 group max-md:mx-auto">
								<div className="w-fit rounded-full p-1 text-teal-500 flex items-center justify-center">
									<PlayIcon className="w-6 h-6" />
								</div>
								<div className="text-slate-700 font-bold">
									Watch Video
								</div>
							</button>
						</div>
					</div>
					<div className="overflow-hidden">
						<img
							src={heroImage}
							alt=""
							className="w-full max-w-xl bg-tealBG rounded-tr-3xl hover:scale-110 transition-all duration-300"
						/>
					</div>
					<div className="absolute bottom-40 w-full max-md:hidden md:block">
						<div className=" bg-white w-full max-w-md mx-auto rounded-full overflow-hidden border-2 flex flex-row border-teal-400/20 focus-within:border-teal-400/50 transition-all duration-300 ">
							<input
								type="text"
								className="py-3 w-full px-3 focus:outline-none placeholder:font-bold text-teal-900 font-bold"
								placeholder="Search... e.g Luxurious"
							/>
							<button className="bg-teal-500 px-10 text-teal-900 font-bold rounded-full">
								Search
							</button>
						</div>
					</div>
				</div>
			</section>
			<Popular />
		</main>
	);
}

function Popular() {
	const cards = [
		{
            id:1,
            image: deluxe1,
			title: "Deluxe Room",
			ratings: [true, true, true, true, false],
			price: 300,
			utilities: [WifiIcon, TvIcon, FoodIcons, BedIcon],
			available: true,
		},
		{
            id:2,
            image: executive2,
			title: "Executive Lounge",
			ratings: [true, true, true, true, true],
			price: 500,
			utilities: [WifiIcon, TvIcon, FoodIcons],
			available: true,
		},
		{
            id:3,
            image: standard1,
			title: "Standard Room",
			ratings: [true, true, true, false, false],
			price: 200,
			utilities: [TvIcon, FoodIcons, BedIcon],
			available: true,
		},
        {
            id:4,
            image: deluxe1,
			title: "Deluxe Room",
			ratings: [true, true, true, true, false],
			price: 300,
			utilities: [WifiIcon, TvIcon, FoodIcons, BedIcon],
			available: true,
		},
		{
            id:5,
            image: executive2,
			title: "Executive Lounge",
			ratings: [true, true, true, true, true],
			price: 500,
			utilities: [WifiIcon, TvIcon, FoodIcons],
			available: true,
		},
		{
            id:6,
            image: standard1,
			title: "Standard Room",
			ratings: [true, true, true, false, false],
			price: 200,
			utilities: [TvIcon, FoodIcons, BedIcon],
			available: true,
		},
	];
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
		<section className="container mx-auto mt-10">
			<div className="flex w-full items-center justify-between max-md:flex-col md:flex-row gap-4">
				<h1 className="text-3xl font-medium text-slate-700">
					Our Most Popular Hotels
				</h1>
				<div className="max-md:w-full flex justify-center">
					<button className="bg-teal-200/20 text-teal-900 font-bold border-2 border-teal-200 hover:bg-teal-200/40 transition-all duration-300 rounded-full px-6 py-1 max-md:w-[80%] active:scale-90">
						View all
					</button>
				</div>
			</div>
			<div className="mt-6">
				<Swiper
					slidesPerView={"auto"}
					spaceBetween={1}
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
							<div className="active:scale-95 transition-all duration-300 bg-white z-50 rounded-full p-2 border shadow-lg">
								<ChevronLeftIcon className="w-6 h-6" />
							</div>
						</button>
					</div>
					{cards.map((card) => (
						<SwiperSlide className="max-w-md h-full">
							<Card data={card} />
						</SwiperSlide>
					))}
					<div className="absolute top-0 z-30 h-full flex items-center justify-center right-0">
						<button className="goNext rounded-full">
							<div className="active:scale-95 transition-all duration-300 bg-white z-50 rounded-full p-2 border shadow-lg">
								<ChevronRightIcon className="w-6 h-6" />
							</div>
						</button>
					</div>
				</Swiper>
			</div>
		</section>
	);
}

function FoodIcons({ className }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			viewBox="0 0 24 24"
		>
			<path
				fill="currentColor"
				d="M18 3a1 1 0 0 1 .993.883L19 4v16a1 1 0 0 1-1.993.117L17 20v-5h-1a1 1 0 0 1-.993-.883L15 14V8c0-2.21 1.5-5 3-5Zm-6 0a1 1 0 0 1 .993.883L13 4v5a4.002 4.002 0 0 1-3 3.874V20a1 1 0 0 1-1.993.117L8 20v-7.126a4.002 4.002 0 0 1-2.995-3.668L5 9V4a1 1 0 0 1 1.993-.117L7 4v5a2 2 0 0 0 1 1.732V4a1 1 0 0 1 1.993-.117L10 4l.001 6.732a2 2 0 0 0 .992-1.563L11 9V4a1 1 0 0 1 1-1Z"
			/>
		</svg>
	);
}

function Card({ data }) {
	return (
		<div className="mx-2 max-w-md">
			<div className="bg-teal-100/20 border w-fit rounded-lg overflow-hidden">
				<div className="overflow-hidden">
					<img
						src={data.image}
						alt="Deluxe Room"
						className="hover:scale-110 transition-all duration-300 w-full"
						draggable={false}
					/>
				</div>
				<div className="p-3 divide-y">
					<div className="flex items-center justify-between">
						<p className="font-medium text-slate-700">
							{data.title}
						</p>
						<div className="flex items-center gap-1">
							{data.ratings.map((rating) => (
								<div>
									{rating ? (
										<StarIcon className="w-4 h-4 text-teal-500" />
									) : (
										<StarOutline className="w-4 h-4 text-teal-500" />
									)}
								</div>
							))}
						</div>
					</div>
					<div className="mt-2 py-4 pb-2 flex justify-between text-teal-700 items-center">
						<p className="font-bold">${data.price}/Night</p>
						<div className="flex gap-3">
                            {data.utilities.map(Utility=>(
                                <div className="w-fit rounded-full p-1 text-teal-500 flex items-center justify-center bg-teal-900">
                                    <Utility className="w-4 h-4 text-teal-100 fill-teal-100" />
                                </div>
                            ))}
						</div>
					</div>
					<div className="mt-2 pt-4 w-full">
						<button className="bg-teal-200 w-full rounded-lg text-teal-900 py-1 font-bold border-2 border-teal-300 transition-all duration-300 active:scale-95">
							Book Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
function BedIcon({ className }) {
	return (
		<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<title>bed</title>
			<path d="M19,7H11V14H3V5H1V20H3V17H21V20H23V11A4,4 0 0,0 19,7M7,13A3,3 0 0,0 10,10A3,3 0 0,0 7,7A3,3 0 0,0 4,10A3,3 0 0,0 7,13Z" />
		</svg>
	);
}
