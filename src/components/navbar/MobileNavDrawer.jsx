import React from "react";
import { NavLink } from "react-router-dom";

export function MobileNavDrawer({ isOpened, navLinks }) {
	return (
		<div
			className={`z-20 absolute w-full md:hidden bg-white ${isOpened ? "translate-y-0" : "-translate-y-full"} transition-all duration-300`}
		>
			<div className="gap-5 text-sm text-gray-700 space-y-1 px-2">
				{navLinks.map((link) => (
					<NavLink to={link.href} className="" key={link.text}>
						<div className="group flex items-center gap-1">
							<div className="group-hover:h-9 bg-teal-400 w-1 rounded-full h-1 transition-all duration-300" />
							<div className="hover:bg-teal-300/20 p-3 rounded-lg text-teal-900 font-bold transition-all duration-300 w-full">
								{link.text}
							</div>
						</div>
					</NavLink>
				))}
			</div>
		</div>
	);
}
