import { Metadata } from "next";
import HeroArea from "../components/HeroArea.jsx";
// import PricingPlans from "../components/PricingPlans.jsx";
import Team from "../components/Team.jsx";
import Cta from "../components/Cta.jsx";
// import Testimonial from "../components/Testimonial.jsx";
import ContactUs from "../components/ContactUs.jsx";
import About from "../components/About.jsx";
// import Brands from "../components/Brands.jsx";
import Features from "../components/Features.jsx";
// import Blog from "../components/Blog.jsx";

export const metadata: Metadata = {
  title: "Welcome to Apex Synergy Management Consulting.",
  description: "Apex Synergy connects you with elite remote professionals to fuel your business strategy. At Apex Synergy our mission is to revolutionize the way companies operate by providing exceptional talent and comprehensive support to drive your success at Apex Synergy.",
};

export default function Home() {
  return (
    <>
      <HeroArea />
      {/* <Brands /> */}
      <Features />
      <About />
      <Team />
      {/* <Testimonial />
      <PricingPlans /> */}
      <Cta />
      <ContactUs />
      {/* <Blog /> */}
    </>
  );
}
