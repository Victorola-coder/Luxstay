import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
	const [isOpened, setIsOpened] = useState(false);

	const navLinks = [
		{
			text: "Bookings",
			href: "#",
		},
		{
			text: "Facilities",
			href: "#",
		},
		{
			text: "About",
			href: "#",
		},
		{
			text: "Contact",
			href: "#",
		},
		{
			text: "FAQs",
			href: "#",
		},
	];

	return (
		<header className="w-full bg-white">
			<nav className="container mx-auto w-full p-3 flex items-center justify-between relative z-30 bg-white py-5">
				<div className="md:hidden max-md:block relative z-10">
					<button
						className="space-y-1.5"
						onClick={() => setIsOpened(!isOpened)}
					>
						<div
							className={`transition-all duration-300 bg-black h-0.5 w-6 ${
								isOpened
									? "rotate-45 translate-y-[0.26rem]"
									: "translate-y-0 rotate-0"
							}`}
						/>
						<div
							className={`transition-all duration-300 bg-black h-0.5 w-6 ${
								isOpened ? "hidden" : "block"
							}`}
						/>
						<div
							className={`transition-all duration-300 bg-black h-0.5 w-6 ${
								isOpened
									? "-rotate-45 -translate-y-[0.24rem]"
									: "translate-y-0 rotate-0"
							}`}
						/>
					</button>
				</div>
				<div className="max-md:w-full max-md:absolute max-md:inset-x-0 max-md:flex justify-center items-center">
					<a href="#">
						<img src={logo} alt="" className="w-10 h-10" />
					</a>
				</div>
				<div className="max-md:hidden md:block">
					<ul className="flex gap-5 text-sm text-gray-700">
						{navLinks.map((link) => (
							<a
								href={link.href}
								className="relative group font-medium"
							>
								<div className="bg-teal-300 w-full group-hover:h-2 absolute bottom-0.5 transition-all duration-300 h-0" />
								<li className="relative z-20">{link.text}</li>
							</a>
						))}
					</ul>
				</div>
				<div className="max-md:relative z-10 flex items-center gap-6 text-teal-900">
					<a href="#" className="md:bg-teal-300/10 rounded-full md:p-2 transition-all duration-300 md:hover:bg-teal-300/30 max-md:fixed bottom-4 right-4 max-md:bg-teal-300/90 max-md:hover:bg-teal-300/100 max-md:p-4">
						<ShoppingCartIcon className="md:h-4 md:w-4 max-md:h-6 max-md:w-6" />
					</a>
					<button className="bg-teal-300 transition-all duration-300 hover:bg-teal-400 font-bold text-sm rounded-full px-6 py-1 active:scale-95">
						Login
					</button>
				</div>
			</nav>
			<div
				className={`absolute w-full md:hidden bg-white ${
					isOpened ? "translate-y-0" : "-translate-y-full"
				} transition-all duration-300`}
			>
				<div className="gap-5 text-sm text-gray-700 space-y-1 px-2">
					{navLinks.map((link) => (
						<a href={link.href} className="">
                            <div className="group flex items-center gap-1">
                                <div className="group-hover:h-9 bg-teal-400 w-1 rounded-full h-1 transition-all duration-300" />
                                <div className="hover:bg-teal-300/20 p-3 rounded-lg text-teal-900 font-bold transition-all duration-300 w-full">
                                    {link.text}
                                </div>
                            </div>
						</a>
					))}
				</div>
			</div>
		</header>
	);
}
