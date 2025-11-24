import Link from "next/link";
// import ShapeSeven from "./Shapes/ShapeSeven.jsx";
// import ShapeEight from "./Shapes/ShapeEight.jsx";
import ShapeNine from "./Shapes/ShapeNine.jsx";
import ShapeTen from "./Shapes/ShapeTen.jsx";

const Cta = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-[#933DE6] py-20 lg:py-[110px]">
        <div className="container mx-auto">
          <div className="relative overflow-hidden">
            <div className="-mx-4 flex flex-wrap items-stretch">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[570px] text-center">
                  <h2 className="mb-6 text-3xl font-semibold leading-snug text-white md:text-[40px]">
                     Ready to Transform Your Business? 
                    {/* <span className="font-light"> Get Started Now </span> */}
                  </h2>
                  <p className="mb-8 text-base leading-relaxed text-white md:pr-10">
                    Apex Synergy connects businesses with top remote talent. Discover 
                    expert consulting services tailored to your project needs
                    Schedule your free consultation and unlock top-tier remote talent
                    today 
                  </p>
                  <Link
                    href="#contact-us"
                    className="inline-block rounded bg-[#FCCD57] px-7 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                  >
                    Schedule Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="absolute left-0 top-0">
            <ShapeNine />
          </span>
          <span className="absolute bottom-0 right-0">
            <ShapeTen />
          </span>
        </div>
      </section>
    </>
  );
};

export default Cta;
