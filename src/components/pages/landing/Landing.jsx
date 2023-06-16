import { useState } from "react";
import { BookStay } from "./BookStay";
import { HeroComponent } from "./HeroComponent";
import { WhatWeOffer1 } from "./WhatWeOffer1";
import { WhatWeOffer2 } from "./WhatWeOffer2";

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
	]);

	return (
		<main className="mb-20">
			{sections.map((Section, index) => (
				<Section.component />
			))}
		</main>
	);
}
