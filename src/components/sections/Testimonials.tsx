"use client";

import { Star, Quote, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Vikram Sharma",
    role: "Corporate Executive",
    date: "2 months ago",
    text: "Booked their Innova Crysta for a 3-day corporate offsite in Udaipur. The driver arrived 15 mins early, the car was spotless, and the driving was exceptionally safe. Highly recommend their corporate travel services.",
    rating: 5,
    platform: "Google Review"
  },
  {
    name: "Priya Desai",
    role: "Destination Wedding Planner",
    date: "1 month ago",
    text: "We hired Yatree Destination for a large destination wedding managing over 20 vehicles. Their logistics team handled the airport transfers and venue shuttles flawlessly. Very professional team.",
    rating: 5,
    platform: "Google Review"
  },
  {
    name: "Rahul Verma",
    role: "Family Tourist",
    date: "3 weeks ago",
    text: "Used their Swift Dzire for local Udaipur sightseeing. The driver doubled as a great local guide, suggesting the best time to visit City Palace to avoid crowds. Transparent pricing, no hidden fees.",
    rating: 5,
    platform: "Verified Customer"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
           
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             style={{ willChange: "transform, opacity" }}
             className="lg:w-1/3 text-center lg:text-left"
           >
              <span className="text-gold-premium font-bold uppercase tracking-[0.2em] text-xs">Verified Trust</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-2 mb-6 tracking-tight">
                Client Testimonials.
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Don't just take our word for it. See what top corporate executives, event planners, and families say about our luxury transportation services.
              </p>

              <div className="inline-flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                 <div className="flex -space-x-4">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-900 overflow-hidden relative">
                         <Image 
                           src={`https://i.pravatar.cc/100?img=${i+10}`} 
                           alt="User" 
                           fill 
                           sizes="48px"
                           className="object-cover" 
                           loading="lazy"
                           quality={60}
                         />
                      </div>
                    ))}
                 </div>
                 <div className="text-left">
                    <div className="flex gap-1 mb-1">
                       {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-gold-premium text-gold-premium" />)}
                    </div>
                    <span className="text-white font-bold text-sm">4.9/5 Average Rating</span>
                 </div>
              </div>
           </motion.div>

           <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {reviews.map((review, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      style={{ willChange: "transform, opacity" }}
                      className={`bg-white p-6 sm:p-8 rounded-[2rem] shadow-xl ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                    >
                       <div className="flex justify-between items-start mb-6">
                          <div className="flex items-center gap-3">
                             <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-black text-slate-900 text-xl">
                                {review.name.charAt(0)}
                             </div>
                             <div>
                                <h4 className="font-bold text-slate-900 leading-tight">{review.name}</h4>
                                <span className="text-xs text-slate-500">{review.date}</span>
                             </div>
                          </div>
                          <Quote className="w-8 h-8 text-slate-100" />
                       </div>
                       
                       <div className="flex gap-1 mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                             <Star key={i} className="w-4 h-4 fill-gold-premium text-gold-premium" />
                          ))}
                       </div>

                       <p className="text-slate-600 text-sm leading-relaxed mb-6">"{review.text}"</p>

                       <div className="flex items-center gap-2 border-t border-slate-100 pt-4">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <span className="text-xs font-bold text-slate-400">{review.platform}</span>
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>

        </div>

      </div>
    </section>
  );
}

