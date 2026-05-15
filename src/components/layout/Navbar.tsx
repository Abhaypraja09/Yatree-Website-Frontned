"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Corporate", href: "/corporate-travel-udaipur" },
    { name: "Weddings", href: "/wedding-car-rental-udaipur" },
    { name: "Events", href: "/event-transportation-udaipur" },
    { name: "Contact", href: "/contact" }
  ];

  // If we are not on the home page, always keep the navbar solid for readability
  const isSolid = isScrolled || pathname !== "/";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-[background-color,padding,border-color,box-shadow] duration-500 border-b border-white/10 ${isSolid ? "bg-white/95 backdrop-blur-xl shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Luxury Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="relative w-10 h-10 md:w-16 md:h-16 transition-transform duration-500 group-hover:scale-110 shrink-0">
              <Image 
                src="/logo.png"
                alt="Yatree Destination Logo"
                fill
                sizes="(max-width: 768px) 40px, 64px"
                className="object-contain"
                priority
              />
            </div>
            <div className={`flex flex-col transition-colors duration-300 ${isSolid ? "text-midnight" : "text-white"}`}>
              <span className="text-lg md:text-3xl font-black tracking-tighter leading-none">YATREE</span>
              <span className="text-[7px] md:text-[10px] font-bold uppercase tracking-[0.2em] mt-0.5 text-gold-premium whitespace-nowrap">Destination</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-bold tracking-widest uppercase transition-colors ${isSolid ? "text-midnight hover:text-gold-premium" : "text-white/80 hover:text-white"}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
             <a href="tel:+918690091154" className={`hidden sm:flex items-center gap-2 font-bold transition-colors ${isSolid ? "text-midnight" : "text-white"}`}>
                <Phone className="w-4 h-4 text-gold-premium" />
                <span className="text-sm">+91 86900 91154</span>
             </a>

             <Link href="/booking" className={`rounded-full hidden sm:flex px-6 py-2.5 text-sm font-bold transition-all hover:scale-105 active:scale-95 ${isSolid ? "bg-midnight text-white hover:bg-slate-800" : "bg-gold-premium text-midnight hover:bg-white"}`}>
               Book Now
             </Link>

             <button 
               aria-label="Toggle Menu"
               className={`lg:hidden w-10 h-10 flex items-center justify-center transition-colors ${isSolid ? "text-midnight" : "text-white"}`}
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             >
               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="lg:hidden fixed inset-0 z-[120] bg-midnight overflow-hidden flex flex-col"
          >
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold-premium/20 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-blue-500/10 rounded-full blur-[80px]" />
            </div>

            <div className="relative flex flex-col p-8 h-full z-10">
               {/* Header */}
               <div className="flex justify-between items-center mb-12 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-black text-2xl leading-none tracking-tighter">YATREE</span>
                      <span className="text-gold-premium text-[10px] font-bold uppercase tracking-[0.3em] mt-1">Destination</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white active:scale-90 transition-transform"
                  >
                    <X className="w-6 h-6" />
                  </button>
               </div>
               
               {/* Links */}
               <div className="flex flex-col gap-6">
                 {navLinks.map((link, i) => (
                   <motion.div
                     key={link.name}
                     initial={{ x: 20, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{ delay: 0.1 * i + 0.2 }}
                   >
                     <Link 
                       href={link.href}
                       onClick={() => setMobileMenuOpen(false)}
                       className="group flex items-center gap-4"
                     >
                       <span className="text-3xl font-bold text-white tracking-[0.05em] uppercase group-hover:text-gold-premium transition-all">
                         {link.name}
                       </span>
                       <div className="h-px flex-1 bg-white/5 group-hover:bg-gold-premium/20 transition-all" />
                       <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-gold-premium group-hover:translate-x-1 transition-all" />
                     </Link>
                   </motion.div>
                 ))}
               </div>

               {/* Footer Info */}
               <div className="mt-auto pt-8 pb-16 space-y-8">
                  <div className="space-y-4">
                    <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Quick Contact</p>
                    <a href="tel:+918690091154" className="flex items-center gap-4 text-white group">
                      <div className="w-12 h-12 rounded-2xl bg-gold-premium flex items-center justify-center text-midnight group-active:scale-95 transition-transform">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-white/40 uppercase tracking-widest leading-none mb-1">Call Concierge</span>
                        <span className="text-xl font-black tracking-tight">+91 86900 91154</span>
                      </div>
                    </a>
                  </div>
                  
                  <Link 
                    href="/booking" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="flex items-center justify-center w-full bg-white text-midnight rounded-2xl py-5 font-black uppercase tracking-[0.2em] text-sm shadow-2xl active:scale-[0.98] transition-all"
                  >
                    Book Your Journey
                  </Link>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

