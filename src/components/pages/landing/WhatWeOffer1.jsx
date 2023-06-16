import luxury from "../../../assets/images/house5.jpg";

export function WhatWeOffer1() {
  return (
    <section className="fade-in p-2 text-amber-900 container mx-auto my-12">
      <div className="flex max-md:flex-col-reverse md:flex-row justify-center gap-4 h-fit">
        <div className="w-full flex items-center">
          <div className="w-full py-3 space-y-7">
            <h1 className="font-bold text-4xl max-md:text-center">
              Indulge in Unparalleled Comfort
            </h1>
            <p className="max-w-xl leading-7">
              Step into a realm of opulence as you enter our
              meticulously designed rooms and suites. Each space
              exudes elegance and tranquility, featuring plush
              furnishings, tasteful decor, and panoramic views
              that showcase the breathtaking beauty of the
              surrounding area. Whether you're seeking a romantic
              escape or a rejuvenating retreat, our accommodations
              provide the perfect sanctuary for your desires.
            </p>
            <div>
              <button className="bg-sandy-brown/30 rounded-lg p-2 w-full max-w-sm mt-2 border-2 border-sandy-brown transition-all duration-300 hover:bg-sandy-brown/40 font-bold">
                View
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-sandy-brown/40 p-2">
          <img
            src={luxury}
            alt=""
            className="w-full rounded-lg h-full hover:scale-110 transition-all duration-300" />
        </div>
      </div>
    </section>
  );
}
