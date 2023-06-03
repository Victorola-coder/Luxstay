import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

export function Card({ data }) {
	return (
		<div className="mx-2 max-w-md">
			<div className="bg-teal-100/20 border w-fit rounded-lg overflow-hidden">
				<div className="overflow-hidden">
					<img
						src={data.image}
						alt="Deluxe Room"
						className="scale-110 transition-all duration-300 w-full hover:scale-125"
						draggable={false}
					/>
				</div>
				<div className="p-3 divide-y">
					<div className="flex items-center justify-between">
						<p className="font-medium text-slate-700">
							{data.title}
						</p>
						<div className="flex items-center gap-1">
							{data.ratings.map((rating, index) => (
								<div key={index}>
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
							{data.utilities.map((Utility,index) => (
								<div key={index} className="w-fit rounded-full p-1 text-teal-500 flex items-center justify-center bg-teal-900">
									<Utility className="w-4 h-4 text-teal-100 fill-teal-100" />
								</div>
							))}
						</div>
					</div>
					<div className="mt-2 pt-4 w-full">
						<NavLink to={`/bookings/${data.id}`}>
							<div className="bg-teal-200 w-full rounded-full text-teal-900 py-1 font-bold border-2 border-teal-300 transition-all duration-300 active:scale-95 text-center">
								Book Now
							</div>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}
