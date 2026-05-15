"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import useMousePosition from "@/hooks/useMousePosition";

export default function InteractiveBackground() {
  const { x, y } = useMousePosition();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const rotateX = useTransform(mouseY, [0, 1000], [5, -5]);
  const rotateY = useTransform(mouseX, [0, 1000], [-5, 5]);
  
  const blob2X = useTransform(mouseX, (v: number) => -v + 1000);
  const blob2Y = useTransform(mouseY, (v: number) => -v + 1000);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Mesh Gradient Blobs */}
      <motion.div 
        style={{ 
          x: mouseX, 
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] opacity-50"
      />
      <motion.div 
        style={{ 
          x: blob2X, 
          y: blob2Y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] opacity-30"
      />

      {/* Static Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white opacity-20" />
    </div>
  );
}
