"use client";
import React, { useState, useEffect } from 'react';
import { BackgroundBeams } from './ui/BackgroundBeams';
import { ThreeCard3D } from '@/components/ui/ThreeCard3D';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { motion } from 'framer-motion';
const About = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div  className="relative min-h-screen w-full dark:bg-slate-950 flex 
    flex-col items-center justify-center overflow-hidden">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-10 z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
          About Me
        </h1>
      </motion.div>

      {/* Content Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 md:px-10 mt-24 md:mt-0 flex items-center justify-center"
      >
        {/* Gradient border container */}
        <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" className=" relative w-full max-w-5xl group">
          {/* Gradient border effect */}
          <div 
            className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"
            style={{ opacity: isMounted ? undefined : 0 }}
          ></div>
          
          {/* Main content container */}
          <div className="relative w-full rounded-3xl bg-[#04071d] p-8 md:p-12 shadow-2xl">
            <div className="hover:ml-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              {/* Text Content */}
              <div className="w-full md:w-1/2 max-w-xl">
                <TextGenerateEffect 
                  words="I'm Waruna Udara Sampath, a passionate Full Stack Developer with expertise in Java Spring Boot, Next.js, and Angular. I love solving problems, building scalable solutions, and exploring new technologies. I thrive on teamwork, continuous learning, and creating impactful digital experiences. I'm open to opportunities that align with my skills and passion for innovation."
                  className="text-base md:text-lg leading-loose text-gray-300 "
                />
              </div>
              {/* Background Effect */}
              <BackgroundBeams  />
              {/* 3D Card Section */}
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <div className="w-full max-w-md" style={{ opacity: isMounted ? 1 : 0 }}>
                  <ThreeCard3D />
                </div>
                
              </div>
              
            </div>
          </div>
        </div>
      </motion.div>
     
      
      
    </div>
  );
};

export default About;