import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

export function ShoppingBagComponent() {
	return (<a href="#">
		<div className="in-out duration-300 text-sandy-brown relative">
			<div className="bg-white/60 p-2 rounded-full hover:bg-white/80 transition-all ease-in-out duration-300 text-sandy-brown relative border border-verdigris/20">
				<ShoppingBagIcon className="h-6 w-6" />
			</div>
			<div className="absolute bg-white text-sm rounded-full -top-2 -right-1 h-5 w-5 flex items-center justify-center border border-sandy-brown">
				0
			</div>
		</div>
	</a>);
}
