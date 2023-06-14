import React from "react";

export function NavbarToggler({ setIsOpened, isOpened }) {
	return (
		<div className="w-10 flex justify-center items-center md:hidden">
					<button
						className="space-y-1.5 flex flex-col items-end self-end"
						onClick={()=>setIsOpened(!isOpened)}
					>
						<div
							className={`transition-all duration-300 bg-white/75 h-0.5 w-6 ${
								isOpened
									? "rotate-45 translate-y-[0.26rem]"
									: "translate-y-0 rotate-0"
							}`}
						/>
						<div
							className={`transition-all duration-300 bg-white/75 h-0.5 w-8 ${
								isOpened ? "hidden" : "block"
							}`}
						/>
						<div
							className={`transition-all duration-300 bg-white/75 h-0.5 ${
								isOpened
									? "-rotate-45 -translate-y-[0.24rem] w-6"
									: "translate-y-0 rotate-0 w-4"
							}`}
						/>
					</button>
				</div>
	);
}


// isOpened
