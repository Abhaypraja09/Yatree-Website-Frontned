"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { Phone, MessageCircle, Briefcase, ShieldCheck, Clock, FileText, CheckCircle2, Building, Globe } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const FAQ = dynamic(() => import("@/components/sections/FAQ"), { ssr: true });

export default function CorporateTravelPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 selection:bg-orange-500 selection:text-white pt-20 md:pb-0 pb-16">
      <Navbar />
      
      {/* 1. Professional Corporate Hero */}
      <section className="relative bg-slate-900 py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80" 
            alt="Corporate Travel Udaipur - Premium Business Sedan" 
            fill 
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-50" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
             <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Business Class Mobility</span>
             <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8 leading-[1.1]">
               Corporate Travel <br/> Udaipur.
             </h1>
             <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
               Experience the gold standard in business transportation. From airport transfers to monthly fleet management, we provide <strong>corporate cab services in Udaipur</strong> with GST compliance.
             </p>
             <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+918690091154" className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm flex items-center gap-3 hover:bg-orange-600 transition-colors shadow-lg">
                  <Briefcase className="w-4 h-4" /> Partner With Us
                </a>
                <a href="https://wa.me/918690091154" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/20 transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Request Quote
                </a>
             </div>
           </motion.div>
        </div>
      </section>

      {/* 2. Corporate SEO Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              <div className="lg:col-span-8">
                 <div className="prose prose-lg prose-slate max-w-none text-slate-600">
                    <h2 className="text-3xl font-black text-slate-900 mb-6">Udaipur's Trusted Corporate Transportation Partner</h2>
                    <p className="leading-relaxed mb-6">
                      In the world of business, time is currency. Whether you are hosting a delegation at a lake-side palace or need reliable <strong>employee transport in Udaipur</strong>, your mobility partner must be professional, punctual, and reliable. Yatree Destination has established itself as the leading provider of <strong>corporate travel in Udaipur</strong>, serving top-tier MNCs, travel management companies, and local industrial houses.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Business Meeting Cabs: Make a Lasting Impression</h3>
                    <p className="mb-6">
                      Impress your clients with our premium fleet. We provide late-model luxury sedans and SUVs (like the Toyota Innova Crysta) that are maintained to the highest standards. Our chauffeurs are trained in corporate etiquette, are well-dressed, and understand the importance of confidentiality and "Silence on Board" protocols. When you book a <strong>business travel taxi in Udaipur</strong> with us, you are guaranteed a smooth, productive ride.
                    </p>

                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 my-10">
                       <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                         <ShieldCheck className="w-5 h-5 text-orange-500" /> Corporate Service Suite:
                       </h4>
                       <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-slate-700">
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> GST Compliant Invoicing</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Dedicated Account Manager</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Monthly Fleet Management</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 24/7 Priority Support Desk</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Verified & Trained Chauffeurs</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Detailed MIS Reports</li>
                       </ul>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Employee Shuttle & Monthly Car Rental Udaipur</h3>
                    <p className="mb-6">
                      For businesses looking for long-term solutions, we offer highly competitive <strong>monthly car rental Udaipur</strong> packages. This is ideal for companies that need a dedicated vehicle for daily executive commutes or employee shuttles. We manage the fuel, maintenance, and driver payroll, allowing you to focus entirely on your core business operations.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Corporate Event Transportation Specialists</h3>
                    <p className="mb-6">
                      Hosting a seminar, product launch, or corporate offsite in the City of Lakes? Our logistics team excels at managing bulk transportation. We have successfully managed events with 50+ vehicles, ensuring seamless movement between <strong>Maharana Pratap Airport</strong> and major business hotels like <strong>Radisson Blu, Aurika, or Taj Aravali</strong>.
                    </p>
                 </div>
              </div>

              <div className="lg:col-span-4">
                 <div className="sticky top-24 space-y-8">
                    
                    <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-2xl">
                       <h4 className="text-xl font-bold mb-6">Corporate Accounts</h4>
                       <div className="space-y-6">
                          <div className="flex items-start gap-4">
                             <Clock className="w-6 h-6 text-orange-500 shrink-0" />
                             <div>
                                <span className="block font-bold">Unmatched Punctuality</span>
                                <span className="text-sm text-slate-400">100% on-time record for pickups.</span>
                             </div>
                          </div>
                          <div className="flex items-start gap-4">
                             <Building className="w-6 h-6 text-orange-500 shrink-0" />
                             <div>
                                <span className="block font-bold">B2B Special Pricing</span>
                                <span className="text-sm text-slate-400">Exclusive rates for corporate firms.</span>
                             </div>
                          </div>
                          <div className="flex items-start gap-4">
                             <Globe className="w-6 h-6 text-orange-500 shrink-0" />
                             <div>
                                <span className="block font-bold">Pan-Rajasthan Network</span>
                                <span className="text-sm text-slate-400">Support in Jaipur, Jodhpur & beyond.</span>
                             </div>
                          </div>
                       </div>
                       <a href="tel:+918690091154" className="w-full bg-orange-500 py-4 rounded-xl text-center font-bold uppercase tracking-widest text-xs mt-10 block hover:bg-orange-600 transition-colors">
                          Enquire Now
                       </a>
                    </div>

                    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                       <h4 className="text-lg font-black text-slate-900 mb-6">Our B2B Clients Love:</h4>
                       <ul className="space-y-3 text-xs font-bold text-slate-600">
                          <li className="flex items-center gap-2 text-green-600 bg-green-50 p-2 rounded-lg"><CheckCircle2 className="w-4 h-4" /> Automated Invoicing</li>
                          <li className="flex items-center gap-2 text-blue-600 bg-blue-50 p-2 rounded-lg"><CheckCircle2 className="w-4 h-4" /> Chauffeur Etiquette Training</li>
                          <li className="flex items-center gap-2 text-purple-600 bg-purple-50 p-2 rounded-lg"><CheckCircle2 className="w-4 h-4" /> GPS Tracking & Safe Rides</li>
                       </ul>
                    </div>

                 </div>
              </div>

           </div>
        </div>
      </section>


      <WhyChooseUs />
      <FAQ />
      <Footer />

      <div className="fixed bottom-0 left-0 w-full z-[100] md:hidden flex border-t border-slate-200 bg-white">
        <a href="tel:+918690091154" className="flex-1 bg-slate-900 text-white flex items-center justify-center gap-2 py-4 font-bold text-sm uppercase tracking-widest"><Phone className="w-4 h-4 text-orange-500" /> Call Now</a>
        <a href="https://wa.me/918690091154" className="flex-1 bg-[#25D366] text-white flex items-center justify-center gap-2 py-4 font-bold text-sm uppercase tracking-widest"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
      </div>
    </main>
  );
}
