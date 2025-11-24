const Cta2 = ({title, subtitle, details, link}) => {
  return (
    <section className="bg-white dark:bg-dark">
      <div className="container mx-auto">
        <div className="relative z-10 overflow-hidden rounded bg-[#933DE6] px-8 py-12 md:py-20">
          <div className="-mx-4 flex">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[570px] text-center">
                {/* <span className="mb-4 block text-base font-medium text-white">
                  {subtitle}
                </span> */}
                <h2 className="mb-5 text-3xl font-bold leading-tight text-white md:text-[40px]/[48px]">
                  {title}
                </h2>
                <p className="mb-8 text-base leading-relaxed text-white md:px-5">
                  {details}
                </p>
                {/* <a
                  href="javascript:void(0)"
                  className="inline-block rounded-md bg-white px-7 py-4 text-base font-medium text-[#933DE6] transition hover:bg-opacity-90"
                >
                  {link}
                </a> */}
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <span className="absolute left-0 top-0 z-[-1]">
              <svg
                width="156"
                height="343"
                viewBox="0 0 156 343"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-213"
                  y="175.925"
                  width="352.265"
                  height="175.956"
                  rx="37"
                  transform="rotate(-47.3095 -213 175.925)"
                  fill="#FCCD57"
                />
                <rect
                  x="-225"
                  y="222.925"
                  width="352.265"
                  height="175.956"
                  rx="29"
                  transform="rotate(-47.3095 -225 222.925)"
                  stroke="#FCCD57"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <span className="absolute bottom-0 right-0 z-[-1]">
              <svg
                width="215"
                height="157"
                viewBox="0 0 215 157"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="255.253"
                  y="448.005"
                  width="359.574"
                  height="236.524"
                  rx="22"
                  transform="rotate(-135 255.253 448.005)"
                  fill="#FCCD57"
                />
                <rect
                  x="307.164"
                  y="343.427"
                  width="342.167"
                  height="143.513"
                  rx="31"
                  transform="rotate(-135 307.164 343.427)"
                  stroke="#FCCD57"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta2;