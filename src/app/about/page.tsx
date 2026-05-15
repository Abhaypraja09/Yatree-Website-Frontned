"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DetailedAbout from "@/components/sections/DetailedAbout";
import ERickshawSection from "@/components/sections/ERickshawSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import KineticTitle from "@/components/ui/KineticTitle";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 selection:bg-orange-500 selection:text-white pt-24 md:pb-0 pb-16">
      <Navbar />
      
      {/* Page Header - Redesigned for Premium Aesthetic */}
      <div className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-midnight">
         {/* Background Parallax Image */}
         <motion.div 
           initial={{ scale: 1.1 }}
           animate={{ scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="absolute inset-0 z-0"
         >
           <Image 
             src="/udaipur_atmospheric_about_bg_1778820777543.png"
             alt="Atmospheric Udaipur Skyline"
             fill
             className="object-cover brightness-[0.4] contrast-[1.1]"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/20 to-midnight" />
         </motion.div>

         <div className="container mx-auto px-6 relative z-10 text-center">
            <Reveal width="100%">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gold-premium/30 bg-gold-premium/10 backdrop-blur-md mb-8">
                <div className="w-2 h-2 rounded-full bg-gold-premium animate-pulse" />
                <span className="text-gold-premium font-black uppercase tracking-[0.4em] text-[10px]">
                  Elite Travel Excellence
                </span>
              </div>
            </Reveal>

            <KineticTitle 
              text="About Yatree Destination."
              className="text-4xl sm:text-6xl md:text-9xl font-black text-white tracking-tight mb-8 leading-[0.9] justify-center"
              stagger={0.06}
            />

            <Reveal delay={0.6} width="100%">
              <p className="text-slate-300 max-w-3xl mx-auto text-lg md:text-2xl leading-relaxed font-light mt-8 opacity-80">
                Udaipur's premier travel partner, combining traditional hospitality with modern efficiency and a deep commitment to sustainable tourism.
              </p>
            </Reveal>
         </div>

         {/* Bottom Fade */}
         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-midnight to-transparent" />
      </div>

      <ERickshawSection />
      <DetailedAbout />
      <WhyChooseUs />
      <Testimonials />
      <Footer />

      {/* Global CTAs */}
      <div className="fixed bottom-8 right-8 z-[90] hidden md:block">
         <a href="https://wa.me/918690091154" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300">
            <MessageCircle className="w-6 h-6 fill-current" />
         </a>
      </div>
      <div className="fixed bottom-0 left-0 w-full z-[100] md:hidden flex border-t border-slate-200 bg-white">
        <a href="tel:+918690091154" className="flex-1 bg-slate-900 text-white flex items-center justify-center gap-2 py-4 font-bold text-sm uppercase"><Phone className="w-4 h-4 text-orange-500" /> Call Now</a>
        <a href="https://wa.me/918690091154" className="flex-1 bg-[#25D366] text-white flex items-center justify-center gap-2 py-4 font-bold text-sm uppercase"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
      </div>
    </main>
  );
}
