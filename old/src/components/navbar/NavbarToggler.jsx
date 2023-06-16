import React from "react";

export function NavbarToggler({ setIsOpened, isOpened }) {
	return (
		<div className="md:hidden max-md:block relative z-10">
			<button
				className="space-y-1.5"
				onClick={() => setIsOpened(!isOpened)}
			>
				<div
					className={`transition-all duration-300 bg-black h-0.5 ${isOpened
							? "rotate-45 translate-y-[0.26rem] w-6"
							: "translate-y-0 rotate-0 w-7"}`} />
				<div
					className={`transition-all duration-300 bg-black h-0.5 w-4 ${isOpened ? "hidden" : "block"}`} />
				<div
					className={`transition-all duration-300 bg-black h-0.5 w-6 ${isOpened
							? "-rotate-45 -translate-y-[0.24rem]"
							: "translate-y-0 rotate-0"}`} />
			</button>
		</div>
	);
}
