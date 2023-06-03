import React from "react";
import { NavLink } from "react-router-dom";

export function NavLinkLarge({ navLinks }) {
	return (
		<div className="max-md:hidden md:block">
			<ul className="flex gap-5 text-sm text-gray-700">
				{navLinks.map((link, index) => (
					<NavLink to={link.href} className="relative group font-medium" key={index}>
						<div className="bg-teal-300 w-full group-hover:h-2 absolute bottom-0.5 transition-all duration-300 h-0" />
						<li className="relative z-20">{link.text}</li>
					</NavLink>
				))}
			</ul>
		</div>
	);
}
