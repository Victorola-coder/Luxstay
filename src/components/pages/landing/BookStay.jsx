import { useEffect, useRef, useState } from "react";
import balcony from "../../../assets/images/balcony.jpg";
import { Link } from "react-router-dom";

export function BookStay() {
	const componentRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const [entry] = entries;
			setIsVisible(entry.isIntersecting);
		});

		if (componentRef.current) {
			observer.observe(componentRef.current);
		}

		return () => {
			if (componentRef.current) {
				observer.unobserve(componentRef.current);
			}
		};
	}, []);

	return (
		<div
			ref={componentRef}
			className={`my-6 ${isVisible ? "fade-in h-auto" : "sh-screen"}`}
		>
			<section className="fade-in p-2 text-amber-900 container mx-auto">
				<div className="flex max-md:flex-col-reverse md:flex-row justify-center gap-4 h-fit">
					<div className="w-full flex items-center">
						<div className="w-full py-3 space-y-7">
							<h1 className="font-bold text-4xl">
								Book Your Extraordinary Stay
							</h1>
							<p className="max-w-xl leading-7">
								Unleash your wanderlust and embark on a journey
								of indulgence and discovery. Whether you're
								seeking a romantic getaway, a family adventure,
								or a solo retreat, our accommodation is the
								perfect choice for discerning travelers who
								crave the best.
								<br />
								Begin your extraordinary experience today by
								booking your stay with us. Let us pamper you and
								create memories that will last a lifetime.
								Welcome to our exquisite getaway, where luxury
								meets tranquility in perfect harmony.
							</p>
							<div>
								<Link
									to="/bookings"
									className="w-full mx-auto max-w-md"
								>
									<button className="bg-sandy-brown/30 rounded-lg p-2 w-full max-w-sm mt-2 border-2 border-sandy-brown transition-all duration-300 hover:bg-sandy-brown/40 font-bold hover:shadow-lg shadow active:scale-90 hover:scale-105">
										View More
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="rounded-lg bg-sandy-brown/40 mr-2">
						<img
							src={balcony}
							alt=""
							className={`w-full rounded-lg h-full transition-all duration-300 max-md:scale-imgs md:scale-img-lgs ${
								isVisible
									? "max-md:translate-y-2 max-md:translate-x-2 md:translate-x-4 md:translate-y-4"
									: " translate-x-0 translate-y-0"
							}`}
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
