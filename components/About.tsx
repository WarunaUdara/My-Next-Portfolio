"use client";
import React from 'react';
import { BackgroundBeams } from './ui/BackgroundBeams';
import { ThreeCard3D } from '@/components/ui/ThreeCard3D';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="relative min-h-screen w-full dark:bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
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

      {/* Main Content Container */}
      <div className="container mx-auto px-4 md:px-10 mt-24 md:mt-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <TextGenerateEffect 
                words="I'm Waruna Udara Sampath, a passionate Full Stack Developer with expertise in Java Spring Boot, Next.js, and Angular. I love solving problems, building scalable solutions, and exploring new technologies. I thrive on teamwork, continuous learning, and creating impactful digital experiences. I'm open to opportunities that align with my skills and passion for innovation."
                className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300"
              />
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {['Java Spring Boot', 'Next.js', 'Angular', 'Full Stack', 'Problem Solving'].map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 3D Card Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full md:w-1/2 flex justify-center items-center"
          >
            <div className="w-full max-w-md">
              <ThreeCard3D />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Effect */}
      <BackgroundBeams className="opacity-40" />
    </div>
  );
};

export default About;