import About from "@/sections/About";
import Achieve from "@/sections/Achieve";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Achieve />
      </main>
    </>
  );
}
