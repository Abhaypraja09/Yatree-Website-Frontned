"use client";

import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    id: 1,
    name: "Arjun Bhat",
    role: "Verified Client",
    image: "https://ui-avatars.com/api/?name=Arjun+Bhat&background=e0f2fe&color=0284c7&size=150&bold=true",
    text: "Excellent service! The car was pristine and the journey was very smooth. Best luxury cab service in Udaipur."
  },
  {
    id: 2,
    name: "Puja Maskara",
    role: "Verified Client",
    image: "https://ui-avatars.com/api/?name=Puja+Maskara&background=e0f2fe&color=0284c7&size=150&bold=true",
    text: "We recently used their cab services for Rajasthan trip. The driver was polite and very helpful. Car was clean. Our journey was totally hassle free."
  },
  {
    id: 3,
    name: "Rahul Sagarkar",
    role: "Verified Client",
    image: "https://ui-avatars.com/api/?name=Rahul+Sagarkar&background=e0f2fe&color=0284c7&size=150&bold=true",
    text: "Nice service. Very punctual and professional. The premium feel of the vehicles really enhanced our Udaipur trip."
  },
  {
    id: 4,
    name: "Sneha Patel",
    role: "Verified Client",
    image: "https://ui-avatars.com/api/?name=Sneha+Patel&background=e0f2fe&color=0284c7&size=150&bold=true",
    text: "Amazing experience! The chauffeur was practically a local guide. Highly recommend their fleet for sightseeing around the city."
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Verified Client",
    image: "https://ui-avatars.com/api/?name=Vikram+Singh&background=e0f2fe&color=0284c7&size=150&bold=true",
    text: "Best luxury travel partner in Udaipur. The booking process was seamless and the journey exceeded expectations."
  },
  {
    id: 6,
    name: "Meera Desai",
    role: "Verified Client",
    image: "https://ui-avatars.com/api/?name=Meera+Desai&background=e0f2fe&color=0284c7&size=150&bold=true",
    text: "Loved the Green Ride e-rickshaw service! It was so convenient for navigating the narrow lanes of Udaipur's old city. Very eco-friendly and safe."
  },
  {
    id: 7,
    name: "Rajesh Kumar",
    role: "Verified Client",
    image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=e0f2fe&color=0284c7&size=150&bold=true",
    text: "The drivers are extremely polite, cooperative, and have great knowledge about Udaipur's routes. Made our family trip totally stress-free."
  },
  {
    id: 8,
    name: "Anita Sharma",
    role: "Verified Client",
    image: "https://ui-avatars.com/api/?name=Anita+Sharma&background=e0f2fe&color=0284c7&size=150&bold=true",
    text: "Highly reliable and professional. Vehicles were impeccably clean and well-maintained. Would definitely book again for my next Rajasthan tour."
  },
  {
    id: 9,
    name: "Karan Mehta",
    role: "Verified Client",
    image: "https://ui-avatars.com/api/?name=Karan+Mehta&background=e0f2fe&color=0284c7&size=150&bold=true",
    text: "Prompt and hassle-free airport transfer. The premium car felt brand new and the chauffeur arrived exactly on time. 5-star service!"
  },
  {
    id: 10,
    name: "Dr. Anjali Verma",
    role: "Verified Client",
    image: "https://ui-avatars.com/api/?name=Dr.+Anjali+Verma&background=e0f2fe&color=0284c7&size=150&bold=true",
    text: "Used their tempo traveller for a large group. Extremely spacious and comfortable. They follow standard, professional procedures perfectly."
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % REVIEWS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-gradient-to-b from-[#eef2f6] to-[#f8fafc] relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-slate-500 font-medium text-lg">
             What our esteemed clients say about us
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative w-full max-w-6xl mx-auto h-[350px] flex items-center justify-center perspective-[1200px]">
           {REVIEWS.map((review, i) => {
             // Calculate circular offset
             let offset = i - activeIndex;
             if (offset < -Math.floor(REVIEWS.length / 2)) offset += REVIEWS.length;
             if (offset > Math.floor(REVIEWS.length / 2)) offset -= REVIEWS.length;

             const isActive = offset === 0;
             const isLeft = offset === -1;
             const isRight = offset === 1;
             
             // Hide cards that are too far
             if (Math.abs(offset) > 1) return null;

             return (
               <motion.div
                 key={review.id}
                 initial={false}
                 animate={{
                   x: isActive ? "0%" : isLeft ? "-70%" : "70%",
                   scale: isActive ? 1.05 : 0.85,
                   opacity: isActive ? 1 : 0.5,
                   zIndex: isActive ? 30 : 10,
                   rotateY: isActive ? 0 : isLeft ? 10 : -10,
                 }}
                 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                 className={`absolute w-[90%] max-w-[400px] bg-white rounded-3xl pt-16 pb-10 px-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col items-center text-center border-t-[6px] border-transparent ${
                   isActive ? "cursor-default border-t-[#0ea5e9]" : "cursor-pointer hover:opacity-70"
                 }`}
                 onClick={() => {
                   if (!isActive) setActiveIndex(i);
                 }}
               >
                 {/* Avatar (Half outside the top of the card) */}
                 <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-[6px] border-[#eef2f6] shadow-xl overflow-hidden bg-white">
                   <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                 </div>
                 
                 {/* Content */}
                 <h3 className="text-xl font-black text-[#0ea5e9] mb-1">{review.name}</h3>
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">{review.role}</p>
                 
                 <p className="text-slate-500 font-medium leading-relaxed text-sm">
                   "{review.text}"
                 </p>
                 
                 <div className="flex gap-1 mt-6">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-[#fbbf24] text-[#fbbf24]" />)}
                 </div>
               </motion.div>
             );
           })}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-3 mt-16">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex 
                ? "bg-[#0ea5e9] w-8" 
                : "bg-[#0ea5e9]/30 hover:bg-[#0ea5e9]/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
