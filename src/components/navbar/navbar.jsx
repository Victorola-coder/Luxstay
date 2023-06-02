import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { NavbarToggler } from "./NavbarToggler";
import { MobileNavDrawer } from "./MobileNavDrawer";
import { CartAndLogin } from "./CartAndLogin";
import { NavLinkLarge } from "./NavLinkLarge";
import { NavBrand } from "./NavBrand";

export default function Navbar() {
	const [isAtBottom, setIsAtBottom] = useState(false);
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

	useEffect(() => {
		const handleScroll = () => {
			const isBottom =
				window.innerHeight + window.pageYOffset >=
				document.body.offsetHeight;
			setIsAtBottom(isBottom);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className="w-full">
			<div className="bg-white w-full relative z-30">
				<nav className="container mx-auto w-full p-3 flex items-center justify-between relative z-30 bg-white py-5">
					<NavbarToggler setIsOpened={setIsOpened} isOpened={isOpened} />
					<NavBrand logo={logo} />
					<NavLinkLarge navLinks={navLinks} />
					<CartAndLogin isAtBottom={isAtBottom} />
				</nav>
			</div>
			<MobileNavDrawer isOpened={isOpened} navLinks={navLinks} />
		</header>
	);
}
