import { PlayIcon } from "@heroicons/react/24/solid";

export function Hero({ heroImage }) {
	return (
		<div className="bg-white w-fit mx-auto rounded-t-3xl rounded-b-md">
			<section className="container mx-auto bg-tealBG/30 rounded-t-3xl overflow-x-hidden rounded-b-md border">
			<div className="flex justify-between max-md:flex-col-reverse md:flex-row">
				<div className="w-full md:hidden px-3 pb-6">
					<div className=" bg-white w-full max-w-md mx-auto rounded-full overflow-hidden border-2 flex flex-row border-teal-400/20 focus-within:border-teal-400/50 transition-all duration-300 ">
						<input
							type="text"
							className="py-3 w-full px-3 focus:outline-none placeholder:font-bold text-teal-900 font-bold"
							placeholder="Search... e.g Luxurious" />
						<button className="bg-teal-500 px-10 text-teal-900 font-bold rounded-full">
							Search
						</button>
					</div>
				</div>
				<div className="w-full max-w-lg md:p-16 max-md:px-3 max-md:pb-5">
					<h1 className="md:text-5xl font-medium text-slate-700 mt-10 flex md:flex-col max-md:flex-row flex-wrap max-md:text-3xl max-md:text-center max-md:justify-center">
						<div className="">Find your perfect</div>
						<div>place to stay</div>
					</h1>
					<p className="text-slate-700 md:mt-10 md:text-left max-md:text-center max-md:mt-5">
						Lorem ipsum dolor sit amet consectetur adipiscing elit.
						Sunt nisi voluptate, provident adipiscing similique
						quis.
					</p>
					<div className="md:mt-6 max-md:mt-3">
						<button className="flex items-center gap-2 hover:bg-white hover:border w-fit rounded-full pr-3 pl-1 py-0.5 transition-all duration-300 group max-md:mx-auto">
							<div className="w-fit rounded-full p-1 text-teal-500 flex items-center justify-center">
								<PlayIcon className="w-6 h-6" />
							</div>
							<div className="text-slate-700 font-bold">
								Watch Video
							</div>
						</button>
					</div>
				</div>
				<div className="overflow-hidden">
					<img
						src={heroImage}
						alt=""
						className="w-full max-w-xl bg-tealBG rounded-tr-3xl hover:scale-110 transition-all duration-300" />
				</div>
				<div className="absolute bottom-40 w-full max-md:hidden md:block">
					<div className=" bg-white w-full max-w-md mx-auto rounded-full overflow-hidden border-2 flex flex-row border-teal-400/20 focus-within:border-teal-400/50 transition-all duration-300 ">
						<input
							type="text"
							className="py-3 w-full px-3 focus:outline-none placeholder:font-bold text-teal-900 font-bold"
							placeholder="Search... e.g Luxurious" />
						<button className="bg-teal-500 px-10 text-teal-900 font-bold rounded-full">
							Search
						</button>
					</div>
				</div>
			</div>
			</section>
		</div>
	);
}
