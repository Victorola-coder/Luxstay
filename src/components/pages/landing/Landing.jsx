import { BookStay } from "./BookStay";
import { HeroComponent } from "./HeroComponent";
import { WhatWeOffer1 } from "./WhatWeOffer1";
import { WhatWeOffer2 } from "./WhatWeOffer2";

export default function Landing() {
	return (
		<main className="mb-20">
			<HeroComponent />
			<WhatWeOffer1 />
			<WhatWeOffer2 />
			<BookStay />
		</main>
	);
}
