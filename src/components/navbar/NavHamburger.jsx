import React from "react";

export function NavHamburger({ toggleNavbar, opened }) {
	return (
		<div className="w-10 max-md:flex justify-center items-center md:hidden">
			<button
				className="space-y-1.5 flex flex-col items-start self-end"
				onClick={toggleNavbar}
			>
				<div
					className={`transition-all duration-300 bg-sandy-brown/75 h-0.5 w-6 ${opened
							? "rotate-45 translate-y-[0.26rem]"
							: "translate-y-0 rotate-0"}`} />
				<div
					className={`transition-all duration-300 bg-verdigris/75 h-0.5 w-8 ${opened ? "hidden" : "block"}`} />
				<div
					className={`transition-all duration-300 h-0.5 ${opened
							? "-rotate-45 -translate-y-[0.24rem] w-6 bg-verdigris"
							: "translate-y-0 rotate-0 w-4 bg-sandy-brown/75"}`} />
			</button>
		</div>
	);
}
