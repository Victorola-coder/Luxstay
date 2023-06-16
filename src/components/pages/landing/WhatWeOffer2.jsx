import { useEffect, useRef, useState } from "react";
import terrace from "../../../assets/images/terrace.jpg";
import { Link } from "react-router-dom";

export function WhatWeOffer2() {
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
			<section className="p-2 text-amber-900 container mx-auto">
				<div className="flex max-md:flex-col-reverse md:flex-row justify-center gap-4 h-fit">
					<div className="w-full flex items-center">
						<div className="w-full py-3 space-y-7">
							<h1 className="font-bold text-4xl max-md:text-center">
								Unforgettable Experiences Await
							</h1>
							<p className="max-w-xl leading-7">
								Immerse yourself in a wealth of extraordinary
								experiences tailored to your every whim. Unwind
								with a refreshing swim in our sparkling pool or
								bask in the sun on our private terrace, where
								you can soak up the stunning vistas that stretch
								as far as the eye can see. For the ultimate
								relaxation, indulge in a soothing spa treatment
								that will transport you to a state of pure
								bliss.
							</p>
							<div>
								<Link
									to="/bookings"
									className="w-full mx-auto max-w-md"
								>
									<button className="bg-sandy-brown/30 rounded-lg p-2 w-full max-w-sm mt-2 border-2 border-sandy-brown transition-all duration-300 hover:bg-sandy-brown/40 font-bold hover:shadow-lg shadow active:scale-90 hover:scale-105">
										View
									</button>
								</Link>
							</div>
						</div>
					</div>
					{isVisible && (
						<div className="rounded-lg bg-sandy-brown/40 ">
							<img
								src={terrace}
								alt=""
								className="w-full rounded-lg h-full transition-all duration-300 max-md:scale-img md:scale-img-lg"
							/>
						</div>
					)}
				</div>
			</section>
		</div>
	);
}
