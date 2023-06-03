import React from "react";
import { useParams } from "react-router-dom";
import deluxe1 from "../../../assets/images/deluxeroom1.jpg";
import executive2 from "../../../assets/images/executivelounge2.jpg";
import standard1 from "../../../assets/images/standardroom1.jpg";
import {
	CreditCardIcon,
	MinusIcon,
	PlusIcon,
	ShoppingCartIcon,
	StarIcon,
	TvIcon,
	WifiIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { FoodIcon } from "../../icons/FoodIcons";
import { BedIcon } from "../../icons/BedIcon";
import { StarOutline } from "heroicons-react";

export default function BookRoom() {
	const { id } = useParams();
	const cards = [
		{
			id: 1,
			image: deluxe1,
			title: "Deluxe Room",
			ratings: [true, true, true, true, false],
			price: 300,
			utilities: [WifiIcon, TvIcon, FoodIcon, BedIcon],
			available: true,
		},
		{
			id: 2,
			image: executive2,
			title: "Executive Lounge",
			ratings: [true, true, true, true, true],
			price: 500,
			utilities: [WifiIcon, TvIcon, FoodIcon],
			available: true,
		},
		{
			id: 3,
			image: standard1,
			title: "Standard Room",
			ratings: [true, true, true, false, false],
			price: 200,
			utilities: [TvIcon, FoodIcon, BedIcon],
			available: true,
		},
		{
			id: 4,
			image: deluxe1,
			title: "Deluxe Room",
			ratings: [true, true, true, true, false],
			price: 300,
			utilities: [WifiIcon, TvIcon, FoodIcon, BedIcon],
			available: true,
		},
		{
			id: 5,
			image: executive2,
			title: "Executive Lounge",
			ratings: [true, true, true, true, true],
			price: 500,
			utilities: [WifiIcon, TvIcon, FoodIcon],
			available: true,
		},
		{
			id: 6,
			image: standard1,
			title: "Standard Room",
			ratings: [true, true, true, false, false],
			price: 200,
			utilities: [TvIcon, FoodIcon, BedIcon],
			available: true,
		},
	];

	const [isLoading, setIsLoading] = useState(true);
	const imagePaths = [deluxe1, executive2, standard1];

	useEffect(() => {
		const imageLoaders = imagePaths.map((path) => {
			const imageLoader = new Image();
			imageLoader.src = path;
			return new Promise((resolve) => {
				imageLoader.onload = resolve;
			});
		});

		Promise.all(imageLoaders).then(() => {
			setIsLoading(false);
		});
	}, []);
	const productData = cards[id - 1];

	const [form, setForm] = useState({
		unit: 0,
	});

	function handleChange(event) {
		const { name, value } = event.target;
		if (!isNaN(value)){
			setForm((prevData) => ({
				...prevData,
				[name]: Number(value),
			}));
		} else {
			console.log(typeof value)
		}
	}

	function add() {
		setForm((prevData) => ({
			...prevData,
			unit: Number(prevData.unit + 1),
		}));
	}

	function subtract() {
		setForm((prevData) => ({
			...prevData,
			unit: prevData.unit <= 0 ? 0 : Number(prevData.unit - 1),
		}));
	}

	return (
		<main className="mt-6 mb-10 md:h-screens">
			<section className=" container mx-auto px-3">
				<div className="flex max-md:flex-col md:flex-row gap-5">
					<div className="overflow-hidden rounded-2xl w-full">
						<img
							src={productData.image}
							alt=""
							className="w-full hover:scale-125 transition-all duration-300 scale-110"
						/>
					</div>
					<div className="w-full justify-betweens flex flex-col md:py-6 max-md:p-0 divide-y-4 divide-teal-900/20">
						<div className="flex justify-between items-center">
							<h1 className="text-3xl font-bold text-teal-900 pb-2">
								{productData.title}
							</h1>
							<div className="flex gap-1.5">
								{productData.ratings.map((rating, index) => (
									<div key={index}>
										{rating ? (
											<StarIcon className="md:w-6 md:h-6 max-md:w-4 max-md:h-4 text-teal-500" />
										) : (
											<StarOutline className="md:w-6 md:h-6 max-md:w-4 max-md:h-4 text-teal-500" />
										)}
									</div>
								))}
							</div>
						</div>
						<div className="text-sm font-medium pt-4 pb-2 text-teal-900">
							<p>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Ipsam omnis magni, a quas
								excepturi illum, voluptatum at sit quae deserunt
								molestias? Itaque sapiente adipisci provident
								eum voluptatibus quibusdam eaque vitae. sapiente
								adipisci provident eum voluptatibus quibusdam
								eaque vitae.
							</p>
							<div className="text-teal-900 flex items-center justify-between">
								<div className="flex gap-3 mt-6">
									{productData.utilities.map((Utility, index) => (
										<div
											key={index}
											className="w-fit rounded-full p-1 text-teal-500 flex items-center justify-center bg-teal-900"
										>
											<Utility className="w-5 h-5 text-teal-100 fill-teal-100" />
										</div>
									))}
								</div>
								<div className="md:hidden translate-y-2.5">
									<h1 className="font-bold text-2xl">
										${productData.price}/Night
									</h1>
								</div>
							</div>
						</div>
						<div className="mt-2 py-4 flex justify-between text-teal-900 items-center">
							<h1 className="font-bold text-2xl max-md:hidden">
								${productData.price}/Night
							</h1>
							<div className="flex gap-1 max-md:w-full max-w-md max-md:mx-auto">
								<button
									onClick={subtract}
									className="bg-teal-900 text-teal-200 rounded-lg p-1 transition-all duration-300 active:scale-75"
								>
									<MinusIcon className="w-6 h-6" />
								</button>
								<input
									type="text"
									className="border focus:outline-none rounded-lg text-center max-md:w-full"
									value={form.unit}
									name="unit"
									onChange={handleChange}
									inputMode="numeric"
								/>
								<button
									onClick={add}
									className="bg-teal-900 text-teal-200 rounded-lg p-1 transition-all duration-300 active:scale-75"
								>
									<PlusIcon className="w-6 h-6" />
								</button>
							</div>
						</div>
						<div className="py-4 flex max-md:flex-col md:flex-row gap-4">
							<div className="w-full">
								<button className="mx-auto bg-teal-800 font-bold text-teal-100 rounded-full py-2 max-w-md w-full border-2 border-teal-500 transition-all duration-300 active:scale-90 hover:bg-teal-900 flex  justify-center items-center gap-3">
									<CreditCardIcon className="w-6 h-6" />
									Check Out
								</button>
							</div>
							<div className="w-full">
								<button className="mx-auto font-bold text-teal-900 rounded-full py-2 max-w-md w-full border-2 border-teal-500 flex items-center justify-center gap-3 hover:bg-teal-900 hover:text-teal-100 transition-all duration-300 active:scale-90">
									<span>
										<ShoppingCartIcon className="w-6 h-6" />
									</span>
									Add to Cart
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
