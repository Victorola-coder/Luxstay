import React from "react";
import { useParams } from "react-router-dom";
import { cards } from "../../../utilities/data";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Detailed() {
	const { id } = useParams();
	const data = cards[id];
	return (
		<section className="container px-2 mx-auto my-10">
			<div className="flex gap-8 max-md:flex-col m-2">
				<div className="w-full bg-verdigris/20 rounded-lg shadow-lg">
					<div className="overflow-hidden max-md:translate-x-2 max-md:translate-y-2 md:translate-x-4 md:translate-y-4 shadow-lg hover:shadow-2xl rounded-lg transition-all duration-300 bg-sandy-brown/20 flex items-center justify-center">
						<img
							src={data.img}
							alt={data.title}
							className="max-w-2xl h-[26rem] object-cover w-full transition-all duration-300 hover:scale-105"
						/>
					</div>
				</div>
				<div className="w-full bg-sandy-brown/30 rounded-lg transition-all duration-300 hover:shadow-xl shadow-lg shadow-verdigris/30 hover:shadow-verdigris/30">
					<div className="bg-verdigris/20 w-full h-full max-md:translate-x-2 max-md:translate-y-2 md:translate-x-4 md:translate-y-4 shadow-lg hover:shadow-2xl rounded-lg transition-all duration-300 backdrop-blur-sm border-2 border-verdigris/20 p-3 text-emerald-900 hover:shadow-sandy-brown/30">
						<div className="flex items-center justify-between">
							<h1 className="font-bold text-2xl">
								{data.name} Room
							</h1>
							<div className="flex items-center gap-2 text-sm font-bold">
								<StarIcon className="h-6 w-6 -mt-1" />
								{data.rating}
							</div>
						</div>
						<div className="md:my-6 max-md:my-3">
							{data.details}
						</div>
						<div className="mt-3 font-bold text-xl">
							₦ {data.price.toLocaleString("en")}
						</div>
						<div className="my-6 font-bold">
							<div className="flex items-center gap-2 max-md:flex-col">
								<button className="shadow-lg hover:shadow-xl active:scale-90 border-2 border-verdigris bg-verdigris/50 rounded-lg p-2 text-emerald-900 transition-all duration-300 hover:bg-verdigris/30 w-full max-w-md">Add to Cart</button>
								<button className="shadow-lg hover:shadow-xl active:scale-90 border-2 border-amber-600 bg-sandy-brown/90 rounded-lg p-2 text-amber-900 transition-all duration-300 hover:bg-sandy-brown/70 w-full max-w-md">Book Now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
