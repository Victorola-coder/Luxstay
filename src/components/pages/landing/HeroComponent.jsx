// <div className="bg-sandy-brown/30 rounded-lg">
// 						<div className="overflow-hidden rounded-t-lg h-2/3 bg-red-300 max-md:rounded-lg">
// 							<img
// 								src={hero1}
// 								alt=""
// 								className="w-full rounded-lgs hover:scale-110 transition-all duration-300 object-cover"
// 							/>
// 						</div>
// 						<div className="h-fit p-3 max-w-lg">
// 							<h1 className="font-bold text-2xl">Coast Side</h1>
// 							<p>
// 								Lorem ipsum dolor sit amet, consectetur
// 								adipisicing elit. Voluptas numquam eos
// 								laudantium facilis dolorem voluptate tenetur
// 								fugit dolore. Aperiam sequi hic sit. Commodi
// 								odit facilis eos cumque, suscipit cum fuga.
// 							</p>
// 						</div>
// 					</div>
import hero1 from "../../../assets/images/room.jpg";
export function HeroComponent() {
  return (
    <section className="fade-in container mx-auto p-2 mt-6 text-amber-900">
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
              <button className="bg-sandy-brown/30 rounded-lg p-2 w-full max-w-sm mt-2 border-2 border-sandy-brown transition-all duration-300 hover:bg-sandy-brown/40 font-bold">
                View Here
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src={hero1}
            alt=""
            className="w-full rounded-lg h-full hover:scale-110 transition-all duration-300" />
        </div>
      </div>
    </section>
  );
}
