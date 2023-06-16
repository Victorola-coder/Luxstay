import terrace from "../../../assets/images/terrace.jpg";

export function WhatWeOffer2() {
  return (
    <section className="fade-in p-2 text-amber-900 container mx-auto my-12">
      <div className="flex max-md:flex-col-reverse md:flex-row justify-center gap-4 h-fit">
        <div className="w-full flex items-center">
          <div className="w-full py-3 space-y-7">
            <h1 className="font-bold text-4xl max-md:text-center">
              Unforgettable Experiences Await
            </h1>
            <p className="max-w-xl leading-7">
              Immerse yourself in a wealth of extraordinary
              experiences tailored to your every whim. Unwind with
              a refreshing swim in our sparkling pool or bask in
              the sun on our private terrace, where you can soak
              up the stunning vistas that stretch as far as the
              eye can see. For the ultimate relaxation, indulge in
              a soothing spa treatment that will transport you to
              a state of pure bliss.
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
            src={terrace}
            alt=""
            className="w-full rounded-lg h-full hover:scale-110 transition-all duration-300" />
        </div>
      </div>
    </section>
  );
}