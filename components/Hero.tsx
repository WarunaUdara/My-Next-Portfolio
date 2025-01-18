"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/HeroHighlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { MovingBorderButton } from "./ui/MovingBorderButton";

export function Hero() {
  return (
    <HeroHighlight>
      <motion.h1
  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: [20, -5, 0],
  }}
  transition={{
    duration: 0.5,
    ease: [0.4, 0.0, 0.2, 1],
  }}
  className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
>
  <TextGenerateEffect words="Turning Ideas into Seamless Digital Experiences." className="mb-4 text-sm" />
  Engineering Innovative <br />
  <Highlight className="text-black dark:text-white">
    Solutions
  </Highlight><br />
  <MovingBorderButton
    duration={2000}
    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
    borderClassName="bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500"
    containerClassName="bg-white dark:bg-black mt-10"
    borderRadius="1rem"
  >
    Download CV
  </MovingBorderButton>
</motion.h1>
     
    </HeroHighlight>
  );
}
