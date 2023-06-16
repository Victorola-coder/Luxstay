import React, { useState } from "react";
import logo from "../../assets/images/loggo.png";
import { Link } from "react-router-dom";
import { MobileDrawer } from "./MobileDrawer";
import { ShoppingBagComponent } from "./ShoppingBagComponent";
import { LargeLinks } from "./LargeLinks";
import { NavHamburger } from "./NavHamburger";

export default function Navbar() {
	const [opened, setOpened] = useState(false);
	function toggleNavbar() {
		setOpened(!opened);
	}

	return (
		<header className="bg-sandy-brown/20 relative text-amber-900">
			<nav className="container mx-auto max-md:p-1 relative z-20 max-sm:p-3 md:p-3">
				<div className="flex items-center justify-between">
					<NavHamburger toggleNavbar={toggleNavbar} opened={opened} />
					<Link
						to="/"
						className="flex max-md:flex-col items-center font-black md:gap-2"
					>
						<img src={logo} alt="" className="h-12 w-12" />
						<div className="max-sm:hidden">LuxStay</div>
					</Link>
					<LargeLinks />
					<ShoppingBagComponent />
				</div>
			</nav>
			<MobileDrawer opened={opened} />
		</header>
	);
}
