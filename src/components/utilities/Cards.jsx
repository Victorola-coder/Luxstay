import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function Card({ route, name, price, rating, description, img }) {
	return (
		<Link to={route}>
			<div className="border-2 w-full max-w-md rounded-lg border-sandy-brown/50 group overflow-hidden hover:border-sandy-brown/80 transition-all duration-300 hover:scale-105">
				<div className="overflow-hidden w-full relative">
					<div className="text-sm flex items-center bg-white/60 w-fit p-1 gap-1 rounded-lg absolute right-2 top-2 px-2 font-bold text-amber-900 z-20 hover:bg-white/80 transition-all duration-300 cursor-pointer group-hover:bg-white/80">
						<div>
							<StarIcon className="text-amber-500 h-4 w-4" />
						</div>
						<div>{rating}</div>
					</div>
					<img
						src={img}
						className="object-cover w-full h-64 transition-all duration-300 hover:scale-110 scale-105"
					/>
				</div>
				<div className="p-3 bg-white rounded-t-xl -mt-2 relative z-10 text-amber-900 border-2 border-sandy-brown/50 group-hover:border-sandy-brown/80 transition-all duration-300 rounded-lg">
					<div className="flex justify-between">
						<h4 className="text-xl font-semibold">{name} Room</h4>
						<div className="font-bold">
							₦ {price?.toLocaleString("en")}
						</div>
					</div>
					<p className="max-w-sm mt-2 text-sm">{description}</p>
					<div className="mt-3">
						<button className="hover:bg-sandy-brown/40 rounded-lg w-full py-1 flex items-center justify-center max-w-sm mx-auto border-2 border-sandy-brown/50 gap-2 font-bold text-lg transition-all duration-300">
							Add To Bag
							<ShoppingBagIcon className="h-6 w-6" />
						</button>
					</div>
				</div>
			</div>
		</Link>
	);
}
