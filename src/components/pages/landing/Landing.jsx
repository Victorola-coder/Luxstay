import { useEffect, useRef, useState } from "react";
import balcony from "../../../assets/images/balcony.jpg";

import { HeroComponent } from "./HeroComponent";
import { WhatWeOffer1 } from "./WhatWeOffer1";
import { WhatWeOffer2 } from "./WhatWeOffer2";

export default function Landing() {
	const [sliderVisible, setSliderVisible] = useState(false);
	const sliderRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setSliderVisible(entry.isIntersecting);
			},
			{ threshold: 0 }
		);
		if (sliderRef.current) {
			observer.observe(sliderRef.current);
		}
		return () => {
			if (sliderRef.current) {
				observer.unobserve(sliderRef.current);
			}
		};
	}, []);

	return (
		<main className="mb-20">
			<HeroComponent />
			{/* apple */}
			<WhatWeOffer1 />
			<WhatWeOffer2 />
			<section className="fade-in p-2 text-amber-900 container mx-auto my-12">
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
								<button className="bg-sandy-brown/30 rounded-lg p-2 w-full max-w-sm mt-2 border-2 border-sandy-brown transition-all duration-300 hover:bg-sandy-brown/40 font-bold">
									View
								</button>
							</div>
						</div>
					</div>
					<div className="overflow-hidden rounded-lg bg-sandy-brown/40 p-2">
						<img
							src={balcony}
							alt=""
							className="w-full rounded-lg h-full hover:scale-110 transition-all duration-300"
						/>
					</div>
				</div>
			</section>
		</main>
	);
}
