import { Metadata } from "next";
import ContactUs from "@/components/ContactUs";
import Cta2 from "@/components/Cta2";
import About10 from "@/components/About10"; 
import { services } from "@/data/data";

export const metadata: Metadata = {
    title: "Our Services",
    description: "At Apex Synergy Management Consulting, we pride ourselves on delivering a comprehensive range of remote staffing solutions tailored to meet the diverse needs of modern businesses. Our dedicated team of professionals is equipped with the skills and expertise to drive your business forward. Here’s an in-depth look at the services we offer",
};

export default function Page() {
    return (
        <>
            <Cta2 
                title="Our Services" 
                subtitle=""
                details="At Apex Synergy Management Consulting, we pride ourselves on delivering a comprehensive range of remote staffing solutions tailored to meet the diverse needs of modern businesses. Our dedicated team of professionals is equipped with the skills and expertise to drive your business forward. Here’s an in-depth look at the services we offer:" 
                link="" />
            <About10 data={services}/>

            <ContactUs/>
        </>
  );
}