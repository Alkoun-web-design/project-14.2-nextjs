import { Metadata } from "next";
import Cta2 from "@/components/Cta2";
import About10 from "@/components/About10";
import ContactUs from "@/components/ContactUs";
import { profiles } from "@/data/data.jsx";

export const metadata: Metadata = {
    title: "Who is Apex Synergy Management Consulting?",
    description: " Apex Synergy is a global consulting firm specializing in remote workforce integration and business transformation. Our team delivers scalable solutions tailored to your strategic goals.",
};

export default function Page() {

    return (
        <>
            <Cta2 
                title=" Who Are We? " 
                subtitle=""
                details=" Apex Synergy is a global consulting firm specializing in remote workforce integration and business transformation. Our team delivers scalable solutions tailored to your strategic goals." 
                link="" />
            <About10 data={profiles}/>
            <ContactUs/>
        </>
    )
}