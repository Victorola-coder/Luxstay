import { useState } from "react";
import { BookStay } from "./BookStay";
import { HeroComponent } from "./HeroComponent";
import { WhatWeOffer1 } from "./WhatWeOffer1";
import { WhatWeOffer2 } from "./WhatWeOffer2";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ViewProducts } from "./ViewProducts";

export default function Landing() {
	const [sections, setSections] = useState([
		{
			isVisible: false,
			component: HeroComponent,
		},
		{
			isVisible: false,
			component: WhatWeOffer1,
		},
		{
			isVisible: false,
			component: WhatWeOffer2,
		},
		{
			isVisible: false,
			component: BookStay,
		},
		{
			isVisible: false,
			component: ViewProducts,
		},
	]);

	return (
		<main className="mb-20 space-y-14">
			{sections.map((Section, index) => (
				<Section.component key={index} />
			))}
		</main>
	);
}
