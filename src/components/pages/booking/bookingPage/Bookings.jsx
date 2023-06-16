import React from "react";
import { cards } from "../../../utilities/data";
import { Card } from "../../../utilities";
import { Link } from "react-router-dom";

export default function Bookings() {
	return (
		<section className="my-5 container px-2 mx-auto mb-10">
			<div>
				<h1 className="text-center font-bold text-4xl text-amber-900">
					Booking
				</h1>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 md:place-content-center">
					{cards.map((card, index) => (
						<Link key={index} to={`${index + 1}/`}>
							<Card {...card} />
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
