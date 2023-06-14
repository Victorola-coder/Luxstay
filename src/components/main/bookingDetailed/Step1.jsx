import React from "react";

export function Step1({ handleChange, form }) {
	return (
		<div className="px-4 mt-4 space-y-4 w-full formSlide">
			<div className="relative">
				<input
					type="text"
					name="name"
					id="name"
					className="w-full rounded-md p-2 px-2 focus:outline-none border-teal-300 border-2 focus:border-teal-400 transition-colors duration-300 peer"
					placeholder="e.g. sammy Larry"
					value={form.name}
					onChange={handleChange}
					required />
				<label
					className={`${form.name !== ""
							? "-translate-y-5 w-fit px-1"
							: "peer-focus:-translate-y-5 peer-focus:w-fit peer-focus:px-1 w-[90%]"} transition-all duration-300 font-medium text-teal-800 absolute top-2 left-0 ml-2 bg-white cursor-text`}
					htmlFor="name"
				>
					Name:
				</label>
			</div>
			<div className="relative">
				<input
					type="email"
					name="email"
					id="email"
					className="w-full rounded-md p-2 px-2 focus:outline-none border-teal-300 border-2 focus:border-teal-400 transition-colors duration-300 peer"
					value={form.email}
					onChange={handleChange}
					placeholder="e.g. johndoe@mail.com"
					required />
				<label
					className={`${form.email !== ""
							? "-translate-y-5 w-fit px-1"
							: "peer-focus:-translate-y-5 peer-focus:w-fit peer-focus:px-1 w-[90%]"} transition-all duration-300 font-medium text-teal-800 absolute top-2 left-0 ml-2 bg-white cursor-text`}
					htmlFor="email"
				>
					Email:
				</label>
			</div>
			<div className="relative">
				<input
					type="text"
					name="phone"
					id="phone"
					className="w-full rounded-md p-2 px-2 focus:outline-none border-teal-300 border-2 focus:border-teal-400 transition-colors duration-300 peer"
					value={form.phone}
					onChange={handleChange}
					placeholder="e.g. +234 1029384922"
					required
					inputMode="numeric" />
				<label
					className={`${form.phone !== ""
							? "-translate-y-5 w-fit px-1"
							: "peer-focus:-translate-y-5 peer-focus:w-fit peer-focus:px-1 w-[90%]"} transition-all duration-300 font-medium text-teal-800 absolute top-2 left-0 ml-2 bg-white cursor-text`}
					htmlFor="phone"
				>
					Phone:
				</label>
			</div>
		</div>
	);
}
