// import aboutImage from "../assets/images/about/about-08/image-01.jpg";
import ShapeOne from "./Shapes/ShapeOne.jsx";
import ShapeTwo from "./Shapes/ShapeTwo.jsx";
import ShapeThree from "./Shapes/ShapeThree.jsx";

const serviceItems = [
  {
    title: "Custom Software Development",
    details:
      "Software Development Talent Mid level to lead/expert tech resources writing/ building you code with AI.",
  },
  {
    title: "Virtual Assistance",
    details:
      "Highly skilled and competent virtual assitants for administrative tasks and customer support.",
  },
  {
    title: "Management Professionals",
    details:
      "We provide the best in class remote project managers, sales managers, client support managers.",
  },
  {
    title: "Social Media Management",
    details:
      "Our remote social media mangers develop and execute comprehensive social media strategy, produce high quality content, and enagge with your audience.",
  },
];

const About = () => {
  return (
    <>
      <section className="overflow-hidden pb-12 pt-10 dark:bg-dark">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-6/12">
              <div className="relative mb-12 lg:mb-0">
                <div className="mx-auto max-w-[430px] rounded-tl-[50px] sm:rounded-tl-[70px]">
                  <img
                    src="/about-us-1.webp"
                    alt="about image"
                    className="w-full rounded-tl-[50px] sm:rounded-tl-[70px]"
                  />
                </div>
                <div className="absolute bottom-0 right-0 z-10 max-w-[320px] overflow-hidden rounded-tr-[50px] bg-[#933DE6] px-6 py-10 text-xl font-bold text-white sm:px-10 sm:text-2xl">
                  Exceptional talent and comprehensive support
                  <div>
                    <span className="absolute left-0 top-0 -z-10">
                      <ShapeOne />
                    </span>
                    <span className="absolute right-0 top-0 -z-10">
                      <ShapeTwo />
                    </span>
                    <span className="absolute bottom-0 right-5 -z-10">
                      <ShapeThree />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 2xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="mb-2 block text-lg font-bold text-[#933DE6] dark:text-[#933DE6] md:mb-4">
                  What We Do!
                </span>
                <h2 className="mb-11 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-4xl sm:leading-tight md:text-5xl lg:text-4xl lg:leading-tight xl:text-5xl">
                  Connect businesses with top-tier remote professionals.
                </h2>
                {serviceItems.map((item, index) => (
                  <div
                    key={index}
                    className={`flex ${index !== serviceItems.length - 1 && "mb-1"}`}
                  >
                    <span className="w-full max-w-[45px] pr-4 text-2xl font-bold text-[#933DE6]">
                      {`${(index + 1).toString().padStart(2, "0")}`}
                    </span>
                    <div className="w-full">
                      <h3 className="mb-4 text-xl font-bold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mb-9 text-base text-body-color dark:text-dark-6">
                        {item.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
