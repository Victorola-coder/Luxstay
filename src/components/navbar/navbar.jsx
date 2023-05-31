import React, { useState } from "react";
import logo from "../../assets/images/logo.png";

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
		<header className="w-full bg-red-400s">
			<nav className="container mx-auto bg-red-white w-full p-3 flex items-center justify-between relative z-30 bg-white">
				<div className="md:hidden max-md:block">
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
				<div className="max-md:translate-x-4 md:translate-x-0">
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
				<div>
					<button className="bg-teal-300 transition-all duration-300 hover:bg-teal-400 text-teal-900 font-bold text-sm rounded-full px-6 py-1 active:scale-95">
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
