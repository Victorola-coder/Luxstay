import React from "react";
import { InfoDropDown } from "./InfoDropDown";

export default function Faqs() {
	const questions = [
		{
			title: "Cancellation Policy",
			body: `In this tab, you can outline the cancellation policy for bookings. Specify the timeframes for cancellations, any applicable fees or penalties, and any special conditions related to cancellations or modifications.`,
		},
		{
			title: "Policies and Terms",
			body: `This tab can cover various policies and terms relevant to the stay, such as pet policies, smoking policies, age restrictions, and any other rules or regulations guests should be aware of during their stay.`,
		},
		{
			title: "Payment And Billing",
			body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Alias reiciendis sequi necessitatibus maxime optio maiores
            nemo rerum temporibus asperiores impedit veritatis, in quas
            mollitia sunt, voluptatem iusto eaque, illum assumenda!`,
		},
		{
			title: "Technical Support",
			body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Alias reiciendis sequi necessitatibus maxime optio maiores
            nemo rerum temporibus asperiores impedit veritatis, in quas
            mollitia sunt, voluptatem iusto eaque, illum assumenda!`,
		},
	];

	return (
		<section className="container mx-auto px-3 mt-6 mb-10">
			<h1 className="text-3xl text-teal-900 font-bold text-center">
				FAQs
			</h1>
			<div>
				{questions.map((question, index) => (
					<InfoDropDown
						key={index}
						title={question.title}
						body={question.body}
					/>
				))}
			</div>
		</section>
	);
}
