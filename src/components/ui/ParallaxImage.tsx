"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ParallaxImage({ src, alt, className = "" }: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/10 ${className}`}>
      <motion.div style={{ y, height: "120%", top: "-10%" }} className="absolute inset-0 w-full">
        <Image 
          src={src} 
          alt={alt} 
          fill 
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </motion.div>
      
      {/* Subtle Border Glow instead of heavy gradients */}
      <div className="absolute inset-0 rounded-[2.5rem] border border-white/20 pointer-events-none shadow-inner" />
    </div>
  );
}
