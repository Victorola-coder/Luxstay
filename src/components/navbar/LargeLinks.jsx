import React from "react";
import { routes } from "./data";
import { NavLink } from "react-router-dom";

export function LargeLinks() {
	return (
		<div className="text-sandy-brown max-md:hidden md:block">
			<ul className="flex gap-6 font-semibold">
				{routes.map((route, index) => (
					<li key={index} className="group overflow-hidden ">
						<NavLink to={route.href} className="relative w-full">
							{({ isActive }) => (
								<>
									<div className={`absolute bg-verdigris/50 w-full h-2 bottom-0.5 -z-10 ${isActive? "translate-y-1" :"group-hover:translate-y-0 translate-y-[160%]"} transition-all duration-300`} />
									{route.text}
								</>
							)}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
}
