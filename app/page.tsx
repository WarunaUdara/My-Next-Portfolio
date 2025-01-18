"use client";
import About from "@/components/About";
import { Hero } from "@/components/Hero";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItemsData } from "@/data/data";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="">
      <FloatingNav navItems={navItemsData} />
      <BackgroundBeams />
      <Hero />
      <About />
    </div>
  );
}
