"use client";
import React, { useRef, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Github, Linkedin, Download, Code2 } from "lucide-react";
import Image from "next/image";
import { SiLeetcode } from "react-icons/si";
import TextType from "../shared/TextType";

const Hero = () => {
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const updateMousePosition = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [mouseX, mouseY]);

  const backgroundGradient = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      rgba(255, 255, 255, 0.06),
      transparent 80%
    )
  `;

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center bg-[#0a0a12] overflow-hidden select-none"
    >
      {/* 1. BACKGROUND LAYER - 3D GRID ARCHITECTURE */}
      <div className="absolute inset-0 z-0 perspective-1000">
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#050505] to-[#0a0a0a]" />
        
        {/* Dynamic mouse-follower spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-50 transition-opacity duration-500"
          style={{ background: backgroundGradient }}
        />
        
        {/* 3D Floor Grid */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[60%] origin-bottom"
          style={{
            transform: "rotateX(60deg) scale(2)",
            background: "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 100%)"
          }}
        />

        {/* Floating tech geometry nodes */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-[20%] left-[10%] w-[200px] h-[200px] border border-white/10 rounded-full mix-blend-screen" />
          <div className="absolute top-[40%] right-[15%] w-[300px] h-[300px] border border-white/5 rounded-full mix-blend-screen" />
          <div className="absolute top-[60%] left-[30%] w-[150px] h-[150px] border border-white/10 rounded-full mix-blend-screen" />
        </div>

        {/* Glowing backdrop structural orb representing the right side light */}
        <div
          className="absolute right-[-15%] top-[10%] w-[1000px] h-[1000px] 
                        bg-white/5 blur-[200px] rounded-full opacity-30 mix-blend-screen pointer-events-none"
        />

        {/* Noise overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay
                        bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
        />
      </div>

        {/* 2. IMAGE CONTENT LAYER */}
      <div className="absolute inset-0 z-10 flex justify-center lg:justify-end items-center pointer-events-none lg:pr-[5%]">

        <motion.div
           initial={{ opacity: 0, x: 50, scale: 1.05 }}
           animate={{ opacity: 1, x: 0, scale: 1 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full md:w-[85%] lg:w-[65%] h-full opacity-60 md:opacity-80 lg:opacity-100"
        >
          <Image
            src="/profile.png"
            alt="Aditya Wandakar"
            fill
            className="object-contain object-center md:object-right-bottom transform-gpu drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-1000 hover:scale-[1.02]"
            style={{
              maskImage:
                "linear-gradient(to top, transparent 10%, black 60%)",
            }}
            priority
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-20 pt-20 pb-10">
        <div className="max-w-4xl flex flex-col items-start">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full 
                       border border-white/20 bg-white/5 backdrop-blur-md 
                       text-white/80 font-mono text-xs tracking-[0.3em] 
                       uppercase mb-8 shadow-lg"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            Full Stack Software Developer
          </motion.div>

          {/* MAIN TYPOGRAPHY - Tight Leading */}
          <div className="flex flex-col m-0 p-0 leading-none">
            <div className="overflow-hidden h-fit">
              <TextType
                text="ADITYA"
                as="h1"
                typingSpeed={70}
                initialDelay={500}
                loop={false}
                showCursor={false}
                className="text-white font-extrabold text-[clamp(4rem,15vw,10rem)] leading-[0.75] tracking-[-0.05em] mb-6 m-0 p-0"
              />
            </div>
            <div className="overflow-hidden h-fit mt-[-0.15em]">
                <TextType
                text="WANDAKAR"
                as="h1"
                typingSpeed={70}
                initialDelay={1200}
                loop={false}
                showCursor={true}
                cursorCharacter="_"
                cursorClassName="text-white ml-2"
                className="text-transparent bg-clip-text bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite] bg-gradient-to-r from-gray-500 via-white to-gray-500 font-bold font-outfit text-[clamp(4rem,15vw,10rem)] leading-[0.75] tracking-[-0.05em] m-0 p-0"
              />
            </div>
          </div>

          {/* BIO SECTION - FORCEFUL PULL UP WITH NEGATIVE MARGIN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="max-w-2xl mt-[-1.5rem] md:mt-[-4.0rem] relative z-30"
          >
            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed mb-10 drop-shadow-lg m-0 p-0">
              <span className="text-white font-medium">
                Full Stack Engineer
              </span>{" "}
              specializing in
              <span className="text-gray-200"> MERN stack development</span>,
              <span className="text-gray-300"> Computer Vision</span>, and
              <span className="text-gray-400"> Machine Learning</span>. I build
              scalable, secure, and AI-powered applications designed for
              real-world impact.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap gap-5">
              <motion.a
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(255,255,255,0.6)",
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/1HOp6VoVS7gIcfGokUpM5QugJYx5o-s3a/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border border-white/20 text-white font-bold rounded-full backdrop-blur-sm transition-all flex items-center gap-3 bg-white/5 shadow-xl"
              >
                Resume <Download size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* SOCIAL DOCK */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="mt-16 flex gap-6 items-center border-t border-white/10 pt-8"
          >
            <a
              href="https://github.com/ADITYA-user18"
              target="_blank"
              className="p-4 rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all group border border-white/5"
            >
              <Github
                size={24}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-wandakar-875007343/"
              target="_blank"
              className="p-4 rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all group border border-white/5"
            >
              <Linkedin
                size={24}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </a>
            <a
              href="https://leetcode.com/u/gVExFK60op/"
              target="_blank"
              className="p-4 rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all group border border-white/5"
            >
              <SiLeetcode className="text-2xl group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
