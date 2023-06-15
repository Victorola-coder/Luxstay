import React from "react";

export function Toast() {
	return (
		<section className="fixed bg-red-300s w-full max-w-md z-50 bottom-5 md:left-5 max-md:left-0 px-3">
			<div className="font-bold bg-white/95 rounded-lg py-2 px-4 text-blue-900 border-2 border-blue-500">
				Added To Cart
			</div>
		</section>
	);
}
