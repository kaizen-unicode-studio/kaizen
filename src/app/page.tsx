import About from "@/sections/About";
import Achieve from "@/sections/Achieve";
import Founder from "@/sections/Founder";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Kaizen from "@/sections/Kaizen";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Achieve />
        <Services />
        <Founder />
        {/* // SLIDER */}
        <Kaizen />
      </main>
    </>
  );
}
