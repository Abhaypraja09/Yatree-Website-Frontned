"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Phone, MessageCircle } from "lucide-react";

export default function BookingPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 selection:bg-orange-500 selection:text-white pt-24 md:pb-0 pb-16">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-slate-900 py-20 px-6 text-center">
         <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Instant Reservation</span>
         <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Book Your Ride</h1>
         <p className="text-slate-400 max-w-2xl mx-auto">Fill out the enquiry form below. Our dispatch team will confirm your booking and assign a vehicle within 30 minutes.</p>
      </div>

      <div className="container mx-auto px-6 py-20 max-w-3xl">
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl">
            <h3 className="text-2xl font-black text-slate-900 mb-2">Trip Details</h3>
            <p className="text-sm text-slate-500 mb-8">Provide your itinerary so we can give you the most accurate quote.</p>
            
            <form className="space-y-5">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-5 py-4 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-5 py-4 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-colors" placeholder="+91 00000 00000" />
                  </div>
               </div>

               <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Service Required</label>
                  <select className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-5 py-4 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-colors appearance-none">
                     <option>Local Sightseeing Taxi</option>
                     <option>Corporate Travel</option>
                     <option>Wedding Transportation</option>
                     <option>Outstation / Tour Package</option>
                     <option>Airport Transfer</option>
                  </select>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Pickup Date</label>
                    <input type="date" className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-5 py-4 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Vehicle Preference</label>
                    <select className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-5 py-4 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-colors appearance-none">
                       <option>Any Vehicle</option>
                       <option>Toyota Etios / Dzire</option>
                       <option>Toyota Innova Crysta</option>
                       <option>Tempo Traveller</option>
                    </select>
                  </div>
               </div>

               <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Message / Itinerary</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-5 py-4 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-colors resize-none" placeholder="E.g. I need an Innova Crysta for 3 days starting from Udaipur airport..."></textarea>
               </div>

               <button type="button" className="w-full bg-slate-900 text-white font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-orange-500 transition-colors shadow-lg mt-4">
                  Confirm Enquiry
               </button>
            </form>
          </div>
      </div>

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
