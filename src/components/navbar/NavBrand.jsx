import React from "react";

export function NavBrand({ logo }) {
	return (
		<div className="max-md:w-full max-md:absolute max-md:inset-x-0 max-md:flex justify-center items-center">
			<a href="#">
				<img src={logo} alt="" className="w-10 h-10" />
			</a>
		</div>
	);
}
