// import imageOne from "../assets/images/hero/hero-12/image-1.jpg";
// import imageTwo from "../assets/images/hero/hero-12/image-2.jpg";
// import imageThree from "../assets/images/hero/hero-12/image-3.jpg";

const heroImages = [
  {
    bigColumn: true,
    image: "/7xm.xyz_923785.webp",
  },
  {
    image: "/7xm.xyz_105527.webp",
  },
  {
    image: "/7xm.xyz_390615.webp",
  },
];

const HeroArea = () => {
  return (
    <>
      <section className="relative pb-10 pt-10 dark:bg-dark">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-[1.208] text-dark dark:text-white lg:text-[38px] xl:text-[40px]">
                   Empowering Growth with Remote Talent Solutions and Expert Business Consulting 
                </h2>
                <p className="mb-8 max-w-[485px] text-base text-body-color dark:text-dark-6">
                   Apex Synergy connects you with elite remote professionals to fuel 
                   your business strategy. At Apex Synergy our mission is to revolutionize 
                   the way companies operate by providing exceptional talent and comprehensive
                    support to drive your success at Apex Synergy. 
                </p>
                {/* <p className="mb-5 text-base font-medium text-dark dark:text-white">
                  Subscribe to get notified when we launch 🎉
                </p>
                <form className="mb-7 flex max-w-[455px] flex-wrap">
                  <input
                    type="email"
                    className="mb-3 mr-3 h-[52px] w-full rounded-md border border-stroke bg-white px-5 text-base text-body-color outline-none placeholder:text-dark-6 focus:border-[#933DE6] focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:focus:border-[#933DE6] sm:max-w-[220px] md:max-w-[315px] lg:max-w-[250px] xl:max-w-[300px]"
                    placeholder="Your work mail"
                  />
                  <button className="mb-3 h-[52px] rounded-md bg-[#933DE6] px-7 text-base font-medium text-white transition hover:bg-blue-dark">
                    Notify Me!
                  </button>
                </form> */}
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4">
                <div className="w-1/2 px-2 sm:px-4">
                  {heroImages.map(
                    (item, index) =>
                      item.bigColumn && (
                        <div
                          key={index}
                          className="mb-4 h-[256px] sm:mb-8 sm:h-[442px] lg:h-[332px] xl:h-[442px]"
                        >
                          <img
                            src={item.image}
                            alt="hero image"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      ),
                  )}
                </div>
                <div className="w-1/2 px-2 sm:px-4">
                  {heroImages.map(
                    (item, index) =>
                      !item.bigColumn && (
                        <div
                          key={index}
                          className="mb-4 h-[120px] sm:mb-8 sm:h-[205px] lg:h-[150px] xl:h-[205px]"
                        >
                          <img
                            src={item.image}
                            alt="hero image"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroArea;
