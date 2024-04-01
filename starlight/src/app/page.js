import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

export default function Home() {
  return (
   <>
   <Hero/>
   <About/>
   <Services/>
   <Reviews/>
   <Contact/>
   </>
  );
}
