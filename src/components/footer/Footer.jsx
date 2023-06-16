import { Link } from "react-router-dom";
import logo from "../../assets/images/loggo.png";

export default function Footer() {
	return (
		<footer className="bg-sandy-brown/40 py-3 px-2 text-amber-900 text-sm">
			<div className="container mx-auto flex justify-between md:items-center max-md:flex-col md:flex-row space-y-4">
				<div className="flex items-center gap-2 max-sm:justify-center max-sm:flex-col ">
					<img src={logo} alt="" className="h-12 " />
					<p>LuxStay</p>
				</div>
				<div>
					<ul className="flex md:gap-5 max-md:flex-col max-md:gap-2">
						<li>
							<Link to="/bookings">
								<div className="bg-sandy-brown/50 p-3 rounded-md max-w-sm transition-all duration-300 hover:bg-sandy-brown/75">
									Bookings
								</div>
							</Link>
						</li>
						<li>
							<Link to="/contact">
								<div className="bg-sandy-brown/50 p-3 rounded-md max-w-sm transition-all duration-300 hover:bg-sandy-brown/75">
									Contact
								</div>
							</Link>
						</li>
						<li>
							<Link to="/faq">
								<div className="bg-sandy-brown/50 p-3 rounded-md max-w-sm transition-all duration-300 hover:bg-sandy-brown/75">
									FAQs
								</div>
							</Link>
						</li>
					</ul>
				</div>
				<div className="max-md:space-y-2">
					<span className="font-sans">&copy;</span>
					LuxStay {new Date().getFullYear()}
					<div>All Rights Reserved</div>
				</div>
			</div>
		</footer>
	);
}
