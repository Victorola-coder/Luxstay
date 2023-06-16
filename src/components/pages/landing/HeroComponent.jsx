import hero1 from "../../../assets/images/room.jpg";
export function HeroComponent() {
	return (
		<section className="fade-in container mx-auto p-2 mt-6 text-amber-900 ">
			<div className="flex max-md:flex-col-reverse md:flex-row justify-center gap-4 h-fit">
				<div className="w-full flex items-center">
					<div className="w-full py-3 space-y-7 h-2/3">
						<h1 className="font-bold text-4xl">
							Welcome to LuxStay
						</h1>
						<p className="max-w-xl leading-7">
							Experience Luxury and Comfort in Lagos. LuxStay
							welcomes you to a world of unparalleled luxury and
							relaxation. Immerse yourself in the enchanting
							atmosphere of our exquisite accommodations nestled
							in the heart of Lagos.
						</p>
						<div>
							<button className="bg-sandy-brown/30 rounded-lg p-2 w-full max-w-sm mt-2 border-2 border-sandy-brown transition-all duration-300 hover:bg-sandy-brown/40 font-bold hover:shadow-lg shadow active:scale-90 hover:scale-105">
								View Here
							</button>
						</div>
					</div>
				</div>
				<div className="rounded-lg bg-sandy-brown/40 ">
					<img
						src={hero1}
						alt=""
						className="w-full rounded-lg h-full transition-all duration-300 max-md:scale-img md:scale-img-lg"
					/>
				</div>
			</div>
		</section>
	);
}
