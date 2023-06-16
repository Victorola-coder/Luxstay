import { useEffect, useRef, useState } from "react";
import luxury from "../../../assets/images/house5.jpg";

export function WhatWeOffer1() {
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
			className={`${isVisible ? "h-auto" : "sh-screen"}`}
		>
			<section
				className={` transition-all duration-300 p-2 text-amber-900 container mx-auto ${
					isVisible ? "rotate-0 fade-in" : ""
				}`}
			>
				<div className="flex max-md:flex-col-reverse md:flex-row justify-center gap-4 h-fit">
					<div className="w-full flex items-center">
						<div className="w-full py-3 space-y-7">
							<h1 className="font-bold text-4xl max-md:text-center">
								Indulge in Unparalleled Comfort
							</h1>
							<p className="max-w-xl leading-7">
								Step into a realm of opulence as you enter our
								meticulously designed rooms and suites. Each
								space exudes elegance and tranquility, featuring
								plush furnishings, tasteful decor, and panoramic
								views that showcase the breathtaking beauty of
								the surrounding area. Whether you're seeking a
								romantic escape or a rejuvenating retreat, our
								accommodations provide the perfect sanctuary for
								your desires.
							</p>
							<div>
								<button className="bg-sandy-brown/30 rounded-lg p-2 w-full max-w-sm mt-2 border-2 border-sandy-brown transition-all duration-300 hover:bg-sandy-brown/40 font-bold hover:shadow-lg shadow active:scale-90 hover:scale-105">
									View
								</button>
							</div>
						</div>
					</div>
					{isVisible && (
						<div className="overflow-hidden rounded-lg bg-sandy-brown/40 p-2 rotate-img rotate-6">
							<img
								src={luxury}
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
