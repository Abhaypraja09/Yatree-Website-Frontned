"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircle, Award, History, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";

const faqs = [
  {
    category: "Pricing & Bookings",
    questions: [
      {
        q: "How do you calculate pricing for outstation taxi trips?",
        a: "Outstation trips are calculated based on a minimum of 250 KM per day. The total fare includes the per KM rate of your chosen vehicle plus a daily driver allowance (₹300/day). Tolls, parking, and state taxes are paid by the customer as per actual receipts."
      },
      {
        q: "Do I need to pay an advance to confirm my booking?",
        a: "Yes, we require a nominal 20-25% advance payment to block the vehicle and allocate a driver for your dates. The remaining balance can be settled directly with the driver during or at the end of your trip."
      },
      {
        q: "What is your cancellation and refund policy?",
        a: "Cancellations made 48 hours prior to the journey are eligible for a full refund of the advance amount. For cancellations within 24 hours, the advance payment is retained as a late cancellation fee to compensate the driver."
      }
    ]
  },
  {
    category: "Services & Fleet",
    questions: [
      {
        q: "Do you provide airport pickup and drop services at unusual hours?",
        a: "Absolutely. We offer 24/7 airport transfers to and from Maharana Pratap Airport (Udaipur). We monitor flight schedules so your driver will be waiting for you even if your flight is delayed."
      },
      {
        q: "Can I book multiple vehicles for a destination wedding?",
        a: "Yes, wedding and event transportation is our specialty. We can provide a coordinated fleet of luxury sedans, Innova Crystas, and Tempo Travellers, complete with a dedicated on-ground coordinator for seamless guest movement."
      },
      {
        q: "Are your vehicles sanitized and safe?",
        a: "Safety and hygiene are our top priorities. Every vehicle is thoroughly deep-cleaned and sanitized before dispatch. Our vehicles are commercially registered, fully insured, and equipped with first-aid kits."
      }
    ]
  },
  {
    category: "Corporate Travel",
    questions: [
      {
        q: "Do you offer post-paid billing for corporate clients?",
        a: "Yes, we offer custom monthly invoicing and post-paid corporate accounts for registered businesses with regular travel needs. Please contact our corporate sales team to set up an account."
      },
      {
        q: "Are your chauffeurs trained for corporate executive travel?",
        a: "Our corporate chauffeurs are specially trained in executive etiquette. They are punctual, discreet, and well-versed in the fastest routes, ensuring your business executives and VIP clients experience a flawless ride."
      }
    ]
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  // Generate FAQ Schema dynamically based on all questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(category => 
      category.questions.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    )
  };

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-premium/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-16 px-4">
          <span className="text-gold-premium font-bold uppercase tracking-[0.2em] text-[10px]">Clear & Transparent</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-6 tracking-tight uppercase leading-[0.95]">
            Frequently Asked Questions.
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light">
            Everything you need to know about our taxi services, billing, and booking process. Honest answers to help you plan your Udaipur trip perfectly.
          </p>
        </div>

        <div className="space-y-12">
          {faqs.map((group, groupIdx) => (
            <div key={groupIdx}>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-gold-premium"></span>
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.questions.map((faq, idx) => {
                  const id = `${groupIdx}-${idx}`;
                  const isOpen = openIndex === id;
                  return (
                    <div 
                      key={idx} 
                      className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen ? 'border-gold-premium shadow-md' : 'border-slate-200 hover:border-slate-300'}`}
                    >
                      <button 
                        onClick={() => toggleFAQ(id)}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                      >
                        <span className="font-bold text-slate-900 pr-8 text-sm md:text-base">{faq.q}</span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-gold-premium text-midnight' : 'bg-slate-100 text-slate-500'}`}>
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="p-6 pt-0 text-slate-600 leading-relaxed text-sm">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Achievement Bar */}
        <div className="mt-20 pt-10 border-t border-slate-200 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-gold-premium" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Government Approved Agency</span>
           </div>
           <div className="flex items-center gap-3">
              <History className="w-6 h-6 text-gold-premium" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Serving Since 2012</span>
           </div>
           <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-gold-premium" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Safe Travel Certified</span>
           </div>
        </div>

        <div className="mt-16 bg-slate-900 rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
           <div>
             <h4 className="text-2xl font-bold text-white mb-2">Still have questions?</h4>
             <p className="text-slate-400 text-sm">Our travel experts are available 24/7 to assist you.</p>
           </div>
           <a href="https://wa.me/917627013579" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-green-600 transition-colors shrink-0">
             <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
           </a>
        </div>

      </div>
    </section>
  );
}
