"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e) => {
      if (e.target.tagName === "A" || e.target.tagName === "BUTTON" || e.target.closest("button")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <>
      {/* Outer Rotating Brackets (Scanner Effect) */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none z-[9999] hidden md:flex"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovered ? 1.5 : 1,
          rotate: isHovered ? 90 : 0
        }}
        transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
      >
        <div className="relative w-10 h-10">
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/60" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/60" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/60" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/60" />
        </div>
      </motion.div>

      {/* Inner Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-none pointer-events-none z-[9999] hidden md:block mix-blend-difference shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isHovered ? 0 : 1
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;