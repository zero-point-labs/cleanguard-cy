import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutUs />
      <Contact />
      {/* Add more sections here as we build them */}
    </>
  );
}
