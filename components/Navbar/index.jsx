"use client"

import ClickOutside from "../ClickOutside.jsx";
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const navList = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "/services",
    text: "Services We Provide",
  },
  {
    link: "/about-us",
    text: "About Us",
  },
  {
    link: "#contact",
    text: "Contact Us",
  },
  // {
  //   link: "/blogs",
  //   text: "News From ASMC",
  // },
];

export default function Navbar () {

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const pathname = usePathname();

  const handleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = React.useState(false);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <header
      className={`sticky left-0 top-0 z-50 w-full bg-white dark:bg-dark ${
        sticky && "bg-opacity-80 shadow-sm backdrop-blur-sm dark:bg-opacity-80"
      }`}
    >
      <div className="container mx-auto">
        <div className="relative z-40 -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link href="/" className="block w-full py-5">
              <img src="/ASMC-logo-title.svg" alt="logo" className="block w-full dark:hidden" />
              <img
                src="/ASMC-logo-title.svg"
                alt="logo"
                className="hidden w-full dark:block"
              />
            </Link>
          </div>

          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={handleNavbarToggle}
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-1.5 ring-[#933DE6] focus:ring-2 lg:hidden"
              >
                <span className="relative my-1.5 block h-0.5 w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-1.5 block h-0.5 w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-1.5 block h-0.5 w-[30px] bg-body-color dark:bg-white"></span>
              </button>

              <ClickOutside onClick={() => setNavbarOpen(false)}>
                <nav
                  className={`absolute right-4 top-full z-40 w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent xl:ml-11 ${navbarOpen ? "" : "hidden"}`}
                >
                  <ul className="block lg:flex">
                    {navList.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.link}
                          className={`rounded-md px-2 py-1 flex text-base font-medium text-dark dark:text-white dark:hover:text-[#FCCD57] lg:ml-5 lg:inline-flex hover:bg-[#933DE6] hover:text-[#FCCD57] transition-all duration-300 ${pathname === Link.href ? "text-[#FCCD57]" : "text-text-dark dark:text-white"}`}
                        >
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </ClickOutside>
            </div>

            {/* <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <Link
                to="#"
                className="rounded-md bg-dark px-7 py-3 text-base font-medium text-white hover:bg-body-color dark:bg-dark-2 dark:hover:bg-dark-3"
              >
                Get Started
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}