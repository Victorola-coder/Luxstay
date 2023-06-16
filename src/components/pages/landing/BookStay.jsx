import { useEffect, useRef, useState } from "react";
import balcony from "../../../assets/images/balcony.jpg";

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
							<h1 className="font-bold text-4xl max-md:text-center">
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
								<button className="bg-sandy-brown/30 rounded-lg p-2 w-full max-w-sm mt-2 border-2 border-sandy-brown transition-all duration-300 hover:bg-sandy-brown/40 font-bold hover:shadow-lg shadow active:scale-90 hover:scale-105">
									View More
								</button>
							</div>
						</div>
					</div>
					{isVisible && (
						<div className="overflow-hidden rounded-lg bg-sandy-brown/40 p-2 rotate-img rotate-6 ">
							<img
								src={balcony}
								alt=""
								className="w-full rounded-lg h-full hover:scale-110 transition-all duration-300 scale-img"
							/>
						</div>
					)}
				</div>
			</section>
		</div>
	);
}
