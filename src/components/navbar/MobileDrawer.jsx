import React from "react";
import { routes } from "./data";
import { NavLink } from "react-router-dom";

export function MobileDrawer({ opened }) {
	return (
		<div
			className={`transition-all duration-300 absolute bg-white/90 border-b-2 border-sandy-brown/50 w-full rounded-br-lg px-1 pt-2 pb-3 z-10 max-w-md border border-t-0 backdrop-blur-md ${
				opened
					? "translate-y-0 opacity-100"
					: "-translate-y-full opacity-0"
			}`}
		>
			<ul>
				{routes.map((route, index) => (
					<NavLink
						key={index}
						to={route.href}
						className="w-full flex items-center gap-1 group max-w-md"
					>
						{({ isActive }) => (
							<>
								<div
									className={`${
										isActive
											? "h-9 bg-verdigris/90"
											: "group-hover:h-9 h-1.5 bg-verdigris/50"
									} w-1.5 rounded-lg transition-all duration-300`}
								/>
								<li
									className={`border-t-2 ${
										isActive
											? "border-sandy-brown bg-sandy-brown/20"
											: "border-sandy-brown/50 hover:border-sandy-brown bg-sandy-brown/10 hover:bg-sandy-brown/20"
									} transition-all duration-300 my-1 rounded-lg p-2 w-full`}
								>
									{route.text}
								</li>
							</>
						)}
					</NavLink>
				))}
			</ul>
		</div>
	);
}
