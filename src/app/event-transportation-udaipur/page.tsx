"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EventTransportation from "@/components/sections/EventTransportation";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { Phone, MessageCircle } from "lucide-react";

export default function EventTransportationPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 selection:bg-orange-500 selection:text-white pt-24 md:pb-0 pb-16">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-slate-900 py-20 px-6 text-center">
         <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Scalable Logistics</span>
         <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Event Transportation Udaipur</h1>
         <p className="text-slate-400 max-w-2xl mx-auto">Moving hundreds of people seamlessly. The preferred travel partner for major festivals, VIP handling, and group movements.</p>
      </div>

      <EventTransportation />
      <WhyChooseUs />
      
      <Footer />

      <div className="fixed bottom-0 left-0 w-full z-[100] md:hidden flex border-t border-slate-200 bg-white">
        <a href="tel:+918690091154" className="flex-1 bg-slate-900 text-white flex items-center justify-center gap-2 py-4 font-bold text-sm uppercase"><Phone className="w-4 h-4 text-orange-500" /> Call Now</a>
        <a href="https://wa.me/918690091154" className="flex-1 bg-[#25D366] text-white flex items-center justify-center gap-2 py-4 font-bold text-sm uppercase"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
      </div>
    </main>
  );
}
