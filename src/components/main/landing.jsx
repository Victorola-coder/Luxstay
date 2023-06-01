import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import heroImage from "../../assets/images/house2.png";
import { Popular } from "./Popular";
import { Hero } from "./Hero";
import { CallToAction } from "./CallToAction";

export default function Landing() {
	return (
		<main className="my-6 overflow-x-hidden px-3">
			<Hero heroImage={heroImage} />
			<Popular />
			<CallToAction />
		</main>
	);
}
