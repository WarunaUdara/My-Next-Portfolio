import About from "@/components/About";
import { Hero } from "@/components/Hero";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItemsData } from "@/data/data";
export default function Home() {
  return (
    <div className="">
      <FloatingNav navItems={navItemsData} />
      <BackgroundBeams/>
      <Hero/>
      <About/>
    </div>
  );
}
