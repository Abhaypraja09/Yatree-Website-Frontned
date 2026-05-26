"use client";

import { useState, useEffect } from "react";
import { Star, Quote, CheckCircle2, MessageSquarePlus, X, Loader2 } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", rating: 5, text: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/reviews");
      const data = await res.json();
      if (data.status === "success") {
        setReviews(data.data.reviews);
      }
    } catch (error) {
      console.error("Error fetching reviews", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage("");
    try {
      const res = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.status === "success") {
        setSubmitMessage("Thank you! Your review has been published.");
        setReviews([data.data.review, ...reviews]);
        setFormData({ name: "", rating: 5, text: "" });
        setTimeout(() => {
          setShowForm(false);
          setSubmitMessage("");
        }, 3000);
      } else {
         setSubmitMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setSubmitMessage("Error submitting review. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
           
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="lg:w-1/3 text-center lg:text-left sticky top-24"
           >
              <span className="text-gold-premium font-bold uppercase tracking-[0.2em] text-xs">Verified Trust</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-2 mb-6 tracking-tight">
                Client Testimonials.
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Don't just take our word for it. See what our esteemed clients have to say about our luxury transportation services. 
              </p>

              <div className="inline-flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 mb-8">
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

              <div>
                 <button 
                   onClick={() => setShowForm(!showForm)}
                   className="w-full sm:w-auto px-8 py-4 bg-gold-premium text-midnight font-black uppercase tracking-widest text-sm rounded-full flex items-center justify-center gap-3 hover:bg-white transition-colors"
                 >
                   <MessageSquarePlus className="w-5 h-5" />
                   {showForm ? "Cancel Review" : "Write a Review"}
                 </button>
              </div>
           </motion.div>

           <div className="lg:w-2/3 w-full">
              
              <AnimatePresence>
                 {showForm && (
                   <motion.div 
                     initial={{ opacity: 0, height: 0, y: -20 }}
                     animate={{ opacity: 1, height: "auto", y: 0 }}
                     exit={{ opacity: 0, height: 0, y: -20 }}
                     className="mb-10 overflow-hidden"
                   >
                      <div className="bg-white rounded-[2rem] p-8 shadow-2xl relative">
                         <button onClick={() => setShowForm(false)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900"><X className="w-6 h-6"/></button>
                         <h3 className="text-2xl font-black text-slate-900 mb-6">Share Your Experience</h3>
                         
                         <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                               <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                               <input 
                                 type="text" 
                                 required
                                 value={formData.name}
                                 onChange={(e) => setFormData({...formData, name: e.target.value})}
                                 className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-gold-premium focus:ring-1 focus:ring-gold-premium transition-all"
                                 placeholder="e.g. Shivaani Bhambure"
                               />
                            </div>
                            
                            <div>
                               <label className="block text-sm font-bold text-slate-700 mb-2">Rating</label>
                               <div className="flex gap-2">
                                  {[1,2,3,4,5].map((star) => (
                                     <button 
                                        key={star}
                                        type="button"
                                        onClick={() => setFormData({...formData, rating: star})}
                                        className="focus:outline-none"
                                     >
                                        <Star className={`w-8 h-8 ${formData.rating >= star ? 'fill-gold-premium text-gold-premium' : 'text-slate-300'}`} />
                                     </button>
                                  ))}
                               </div>
                            </div>

                            <div>
                               <label className="block text-sm font-bold text-slate-700 mb-2">Your Review</label>
                               <textarea 
                                 required
                                 rows={4}
                                 value={formData.text}
                                 onChange={(e) => setFormData({...formData, text: e.target.value})}
                                 className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-gold-premium focus:ring-1 focus:ring-gold-premium transition-all"
                                 placeholder="Tell us about your ride experience..."
                               ></textarea>
                            </div>

                            {submitMessage && (
                               <div className={`p-4 rounded-xl text-sm font-bold ${submitMessage.includes('Thank') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                  {submitMessage}
                               </div>
                            )}

                            <button 
                               type="submit" 
                               disabled={submitting}
                               className="w-full bg-slate-900 text-white font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-gold-premium hover:text-midnight transition-colors flex justify-center items-center gap-2 disabled:opacity-70"
                            >
                               {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Post Review"}
                            </button>
                         </form>
                      </div>
                   </motion.div>
                 )}
              </AnimatePresence>

              {loading ? (
                <div className="flex justify-center items-center py-20">
                   <Loader2 className="w-10 h-10 text-gold-premium animate-spin" />
                </div>
              ) : reviews.length === 0 ? (
                <div className="text-center py-20">
                   <p className="text-slate-400 text-lg">No reviews yet. Be the first to share your experience!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                   {reviews.map((review, index) => (
                      <motion.div 
                        key={review._id || index} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                        className={`bg-white p-6 sm:p-8 rounded-[2rem] shadow-xl ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                      >
                         <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-3">
                               {review.avatar ? (
                                 <div className="w-12 h-12 rounded-full overflow-hidden relative border border-slate-100">
                                   <Image src={review.avatar} alt={review.name} fill sizes="48px" className="object-cover" />
                                 </div>
                               ) : (
                                 <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-black text-slate-900 text-xl uppercase">
                                    {review.name.charAt(0)}
                                 </div>
                               )}
                               <div>
                                  <h4 className="font-bold text-slate-900 leading-tight capitalize">{review.name}</h4>
                                  <span className="text-xs text-slate-500">{formatDate(review.createdAt)}</span>
                               </div>
                            </div>
                            <Quote className="w-8 h-8 text-slate-100" />
                         </div>
                         
                         <div className="flex gap-1 mb-4">
                            {[...Array(review.rating || 5)].map((_, i) => (
                               <Star key={i} className="w-4 h-4 fill-gold-premium text-gold-premium" />
                            ))}
                         </div>

                         <p className="text-slate-600 text-sm leading-relaxed mb-6">"{review.text}"</p>

                         <div className="flex items-center gap-2 border-t border-slate-100 pt-4">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span className="text-xs font-bold text-slate-400">Verified Customer</span>
                         </div>
                      </motion.div>
                   ))}
                </div>
              )}
           </div>

        </div>

      </div>
    </section>
  );
}
