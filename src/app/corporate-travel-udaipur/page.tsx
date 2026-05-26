"use client";

import { useState, useRef, Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Phone, 
  MessageCircle, 
  Briefcase, 
  Car, 
  Bus, 
  Users, 
  Settings,
  Sparkles,
  ChevronRight,
  Check,
  Calendar,
  MapPin,
  Mail,
  User,
  Navigation,
  Star,
  CheckCircle2,
  FileText,
  X,
  Building
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Vehicle {
  id: string;
  name: string;
  type: "car" | "bus";
  tag: string;
  image: string;
  description: string;
  seats: string;
  luggage: string;
  ac: boolean;
  features: string[];
}

const VEHICLES: Vehicle[] = [
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    type: "car",
    tag: "RECOMMENDED • SUV",
    image: "/innova.png",
    description: "The gold standard of luxury travel in India. Extremely spacious, unmatched comfort, and a flawless premium ride. Custom YATREE plates.",
    seats: "7 Seater",
    luggage: "4 Bags",
    ac: true,
    features: ["Plush Captain Seats", "Dual Zone AC", "Premium Audio System", "VIP YATREE Plates"]
  },
  {
    id: "toyota-etios",
    name: "Toyota Etios",
    type: "car",
    tag: "BEST SELLER • SEDAN",
    image: "/etios.png",
    description: "Extremely comfortable and reliable sedan offering a smooth ride and deep boot storage for highway journeys. Custom YATREE plates.",
    seats: "4 Seater",
    luggage: "3 Bags",
    ac: true,
    features: ["Deep Boot Space", "Premium Suspension", "High AC Comfort", "VIP YATREE Plates"]
  },
  {
    id: "maruti-dzire",
    name: "Maruti Suzuki Dzire",
    type: "car",
    tag: "POPULAR TAXI • SEDAN",
    image: "/dzire.png",
    description: "The classic Indian sightseeing taxi. Compact, highly economical, and perfect for navigating narrow palace streets. Custom YATREE plates.",
    seats: "4 Seater",
    luggage: "2 Bags",
    ac: true,
    features: ["Exceptional Fuel Mileage", "Compact & Agile", "Good Trunk", "VIP YATREE Plates"]
  },
  {
    id: "vw-vento",
    name: "Volkswagen Vento",
    type: "car",
    tag: "EXECUTIVE CLASS • SEDAN",
    image: "/vento.png",
    description: "European luxury meets power. Perfect executive choice for corporate travels and premium outstation trips. Custom YATREE plates.",
    seats: "4 Seater",
    luggage: "3 Bags",
    ac: true,
    features: ["High-End Cabin Safety", "German Engineering", "Leatherette Seats", "VIP YATREE Plates"]
  },
  {
    id: "force-traveller-12",
    name: "Force Traveller (12 Seats)",
    type: "bus",
    tag: "POPULAR • TEMPO",
    image: "/tempo.png",
    description: "Spacious luxury minibus designed specifically for mid-sized family groups touring Rajasthan. Custom YATREE plates.",
    seats: "12 Seater",
    luggage: "10 Bags",
    ac: true,
    features: ["Pushback Seats", "Dual Roof Blowers", "LED Screen", "VIP YATREE Plates"]
  },
  {
    id: "force-traveller-17",
    name: "Force Traveller (17 Seats)",
    type: "bus",
    tag: "GROUP TOURER • TEMPO",
    image: "/traveller-17.png",
    description: "Extended chassis Force traveller for larger tourist delegations. Ample shoulder-room and heavy capacity A/C. Custom YATREE plates.",
    seats: "17 Seater",
    luggage: "15 Bags",
    ac: true,
    features: ["Extended Legroom", "Roof Cargo Rack", "Premium Audio", "VIP YATREE Plates"]
  },
  {
    id: "coach-bus-35",
    name: "Luxury AC Coach (35 Seater)",
    type: "bus",
    tag: "AASHAPURA CLASS • AC COACH",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80",
    description: "Premium mid-size guest shuttle coach. Equipped with high-capacity air conditioning and panoramic glass. Custom YATREE plates.",
    seats: "35 Seater",
    luggage: "30 Bags",
    ac: true,
    features: ["Panoramic Windows", "High Capacity A/C", "Underdeck Storage", "VIP YATREE Plates"]
  },
  {
    id: "coach-bus-50",
    name: "Grand AC Coach (50 Seater)",
    type: "bus",
    tag: "AASHAPURA GRAND • HEAVY BUS",
    image: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&w=600&q=80",
    description: "Grand passenger cruiser from Aashapura portfolio. Ideal for massive destination weddings, events, and tours. Custom YATREE plates.",
    seats: "50 Seater",
    luggage: "45 Bags",
    ac: true,
    features: ["Heavy Suspensions", "PA Mic System", "Deep Cargo Bay", "VIP YATREE Plates"]
  }
];

function CorporateBookingEngine() {
  const [activeTab, setActiveTab] = useState<"car" | "bus">("car");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    pickupDate: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSelectVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsSuccess(false);
    setFormData({
      name: "",
      phone: "",
      company: "",
      pickupDate: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedVehicle) return;
    
    setIsSubmitting(true);
    
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          customerName: formData.name,
          email: `${formData.phone.replace(/[^0-9]/g, '')}@yatreedestination.com`,
          phone: formData.phone,
          pickupLocation: "Corporate Request",
          dropLocation: "Corporate Destination",
          pickupDate: formData.pickupDate,
          tripType: "B2B Concierge Priority Booking",
          vehicleType: selectedVehicle.name,
          customerNotes: `Company: ${formData.company || 'N/A'}. Directives: ${formData.message || 'None'}`
        })
      });
    } catch (err) {
      console.warn("DB save offline", err);
    }

    const whatsappNumber = "917627013579";
    const text = `*YATREE DESTINATION - B2B PRIORITY RESERVATION*\n` +
                 `----------------------------------------\n` +
                 `👤 *Company Rep:* ${formData.name}\n` +
                 `📞 *Direct Phone:* ${formData.phone}\n` +
                 `🏢 *Corporate Org:* ${formData.company || 'N/A'}\n` +
                 `🚕 *Selected Fleet:* ${selectedVehicle.name} (${selectedVehicle.seats})\n` +
                 `📅 *Schedule Date:* ${formData.pickupDate}\n` +
                 `📝 *Special Notes:* ${formData.message || 'None'}\n` +
                 `----------------------------------------\n` +
                 `Please generate commercial B2B tax invoice and assign elite driver.`;
    
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const filteredVehicles = VEHICLES.filter(v => v.type === activeTab);

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Luminous Title Block */}
        <div className="text-center mb-12">
          <span className="text-gold-premium font-bold uppercase tracking-[0.25em] text-xs mb-3 block">Corporate Fleet Showcase</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase leading-none">Select Showroom Fleet</h2>
          <p className="text-slate-500 mt-3 text-xs md:text-sm font-medium">Click "Reserve Priority Ride" to request custom corporate tariffs with VIP YATREE plates.</p>
        </div>

        {/* Minimal iOS-style Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-100/60 backdrop-blur border border-slate-200/60 p-1.5 rounded-2xl flex gap-1 shadow-sm max-w-[280px] w-full">
            <button
              onClick={() => {
                setActiveTab("car");
                setSelectedVehicle(null);
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${activeTab === 'car' ? 'bg-white text-slate-950 shadow-md border border-slate-200/40 font-bold' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <Car className="w-3.5 h-3.5" />
              Car
            </button>
            <button
              onClick={() => {
                setActiveTab("bus");
                setSelectedVehicle(null);
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${activeTab === 'bus' ? 'bg-white text-slate-950 shadow-md border border-slate-200/40 font-bold' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <Bus className="w-3.5 h-3.5" />
              Bus
            </button>
          </div>
        </div>

        {/* Luminous Showroom Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredVehicles.map((vehicle) => {
            const isSelected = selectedVehicle?.id === vehicle.id;
            return (
              <div
                key={vehicle.id}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.01)] flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-gold-premium/20"
              >
                {/* Shiny Product Frame with Radial Gold Glow */}
                <div className="relative h-56 w-full bg-white border-b border-slate-100/60 p-2 flex items-center justify-center overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.04)_0%,transparent_70%)] pointer-events-none" />
                  
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    className="w-[95%] h-[90%] object-contain relative z-10 transition-transform duration-500 group-hover:scale-105 mix-blend-multiply" 
                  />

                  {/* Premium Badge tag */}
                  <div className="absolute top-5 left-5 z-20">
                    <span className="bg-amber-500/10 backdrop-blur-md border border-amber-500/25 text-amber-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-amber-600 fill-current" />
                      {vehicle.tag}
                    </span>
                  </div>

                  {/* Seat details */}
                  <div className="absolute bottom-5 left-5 z-20 flex gap-2">
                    <span className="bg-slate-950 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                      <Users className="w-3.5 h-3.5 text-gold-premium" />
                      {vehicle.seats}
                    </span>
                    <span className="bg-white border border-slate-200/80 text-slate-700 text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-sm">
                      PLATE: YATREE
                    </span>
                  </div>
                </div>

                {/* Showroom Content */}
                <div className="p-8 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-gold-premium transition-colors duration-300 uppercase tracking-tight mb-2">
                      {vehicle.name}
                    </h3>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium mb-5">
                      {vehicle.description}
                    </p>
                    
                    {/* Features capsule list */}
                    <div className="flex flex-wrap gap-1.5">
                      {vehicle.features.slice(0, 3).map((feat, i) => (
                        <span key={i} className="text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200/60 px-3 py-1 rounded-full">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleSelectVehicle(vehicle)}
                    className="w-full bg-slate-950 group-hover:bg-gold-premium text-white group-hover:text-midnight font-black text-xs md:text-sm uppercase tracking-widest py-4 rounded-xl transition-all duration-300 mt-6 flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] cursor-pointer"
                  >
                    Reserve Priority Ride
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Glassmorphic VIP Concierge Drawer Modal */}
      <AnimatePresence>
        {selectedVehicle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/50 backdrop-blur-md z-[150] flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedVehicle(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="bg-white rounded-[2.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.15)] border border-slate-100 max-w-4xl w-full overflow-hidden grid grid-cols-1 md:grid-cols-12 relative text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedVehicle(null)}
                className="absolute top-6 right-6 z-30 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Column: Visual Vehicle Frame */}
              <div className="md:col-span-5 bg-gradient-to-tr from-slate-50 via-slate-50 to-amber-50/20 p-8 flex flex-col justify-between border-r border-slate-100 relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.06)_0%,transparent_80%)] pointer-events-none" />
                
                <div>
                  <span className="bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-4">
                    <Star className="w-3.5 h-3.5 text-amber-600 fill-current" /> {selectedVehicle.tag}
                  </span>
                  <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-3">{selectedVehicle.name}</h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-6">{selectedVehicle.description}</p>
                </div>

                {/* Large Showroom vehicle display */}
                <div className="my-8 relative h-36 w-full flex items-center justify-center">
                  <img src={selectedVehicle.image} alt={selectedVehicle.name} className="max-w-full max-h-full object-contain relative z-10 mix-blend-multiply" />
                </div>

                {/* Showroom Specs */}
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <span className="bg-slate-950 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                      <Users className="w-3.5 h-3.5 text-gold-premium" /> {selectedVehicle.seats}
                    </span>
                    <span className="bg-white text-slate-800 text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-slate-200">
                      PLATE: YATREE
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {selectedVehicle.features.map((feat, i) => (
                      <span key={i} className="text-xs font-semibold text-slate-700 bg-slate-200/30 border border-slate-200/40 px-2.5 py-1 rounded-full">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Checkout or Success Form */}
              <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-center">
                {isSuccess ? (
                  <div className="p-4 text-center flex flex-col items-center justify-center min-h-[300px]">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 text-emerald-500 shadow-sm">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">Reservation Sent!</h3>
                    <p className="text-slate-500 text-xs leading-relaxed max-w-sm mb-8 font-medium">
                      Your priority corporate reservation has been recorded. Our dedicated account manager has also been notified via WhatsApp and will confirm matching chauffeur details shortly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setSelectedVehicle(null);
                      }}
                      className="bg-slate-950 hover:bg-gold-premium hover:text-midnight text-white font-black uppercase tracking-widest py-4 px-8 rounded-xl transition-all text-[9px] cursor-pointer"
                    >
                      Return to Showroom
                    </button>
                  </div>
                ) : (
                  <>
                    <span className="text-[8px] font-black uppercase tracking-[0.25em] text-slate-400 mb-2 block">Priority B2B Desk</span>
                    <h3 className="text-xl md:text-2xl font-black text-slate-950 uppercase tracking-tighter mb-6">Concierge Reservation</h3>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-1">
                        <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest">Representative Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                          <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200/80 hover:border-slate-300 focus:border-gold-premium px-11 py-3.5 rounded-xl text-xs font-bold text-slate-900 focus:outline-none transition-all" placeholder="E.g. Rajesh Kumar" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest">WhatsApp Number</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                          <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200/80 hover:border-slate-300 focus:border-gold-premium px-11 py-3.5 rounded-xl text-xs font-bold text-slate-900 focus:outline-none transition-all" placeholder="E.g. +91 96609 53135" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest">Company / Hotel Name</label>
                          <div className="relative">
                            <Building className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                            <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200/80 hover:border-slate-300 focus:border-gold-premium px-11 py-3.5 rounded-xl text-xs font-bold text-slate-900 focus:outline-none transition-all" placeholder="Optional" />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest">Travel Date</label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                            <input required type="date" name="pickupDate" value={formData.pickupDate} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200/80 hover:border-slate-300 focus:border-gold-premium px-11 py-3.5 rounded-xl text-xs font-bold text-slate-900 focus:outline-none transition-all" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest">Special Itinerary Directives (Optional)</label>
                        <textarea rows={2} name="message" value={formData.message} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200/80 hover:border-slate-300 focus:border-gold-premium px-4 py-3.5 rounded-xl text-xs font-medium text-slate-900 focus:outline-none transition-all resize-none" placeholder="Provide Cost Center details or specific travel routes..."></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-slate-950 hover:bg-gold-premium hover:text-midnight text-white font-black uppercase tracking-widest py-4.5 rounded-xl transition-all text-xs active:scale-[0.98] cursor-pointer mt-4 flex items-center justify-center gap-2 shadow-lg shadow-slate-950/10"
                      >
                        {isSubmitting ? (
                          "Logging Reservation..."
                        ) : (
                          <>
                            Confirm Priority Fleet via WhatsApp
                            <MessageCircle className="w-4 h-4 fill-current" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CorporateTravelPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 selection:bg-gold-premium selection:text-midnight pt-20 md:pb-0 pb-16">
      <Navbar />
      
      {/* 1. Luminous Premium Hero */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-32 overflow-hidden text-center">
        {/* Abstract Glowing Blobs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-amber-200/10 to-gold-premium/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-gold-premium/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
             <span className="bg-gold-premium/10 border border-gold-premium/25 text-gold-premium font-black uppercase tracking-[0.25em] text-[9px] px-4 py-1.5 rounded-full mb-6 inline-flex items-center gap-1.5">
               <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Business Class Mobility
             </span>
             <h1 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tighter mb-8 leading-[1.1] uppercase">
               Corporate Travel <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-slate-800 to-gold-premium">Udaipur</span>
             </h1>
             <p className="text-xs md:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed mb-10 font-medium">
               Experience the gold standard in corporate transportation. From VIP client transfers to monthly fleet management, we provide <strong>corporate cab services in Udaipur</strong> with GST compliance, professional drivers, and pristine showroom vehicles.
             </p>
             <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+917627013579" className="bg-slate-950 hover:bg-gold-premium text-white hover:text-midnight px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[9px] flex items-center gap-2 transition-all shadow-lg active:scale-95">
                  <Briefcase className="w-4 h-4 text-gold-premium" /> Partner With Us
                </a>
                <a href="#showroom" className="bg-white border border-slate-200/80 hover:border-gold-premium/30 text-slate-700 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[9px] hover:bg-slate-50 transition-all flex items-center gap-2 active:scale-95 shadow-sm">
                  <FileText className="w-4 h-4 text-gold-premium" /> View Showroom Fleet
                </a>
             </div>
           </motion.div>
        </div>
      </section>

      {/* 2. Interactive B2B Fleet Showcase */}
      <section id="showroom" className="py-24 bg-transparent text-center border-t border-slate-200/50">
        <Suspense fallback={
          <div className="container mx-auto px-6 py-20 text-center">
            <div className="w-12 h-12 border-4 border-gold-premium border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Loading Corporate Showcase...</p>
          </div>
        }>
          <CorporateBookingEngine />
        </Suspense>
      </section>

      {/* 3. Luxury B2B Perks Grid */}
      <section className="py-24 bg-white border-y border-slate-200/50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-amber-100/10 to-transparent rounded-full blur-[80px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
          <div className="text-center mb-16">
            <span className="text-gold-premium font-black uppercase tracking-[0.25em] text-[9px] mb-3 block">Corporate Standards</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase leading-none">Elite Travel Benefits</h2>
            <p className="text-slate-400 mt-3 text-xs md:text-sm font-medium">Why Udaipur's top business houses and luxury hotels partner with Yatree Destination.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Perk 1 */}
            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-200/40 shadow-sm text-left hover:border-gold-premium/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/5 flex items-center justify-center text-gold-premium mb-6 border border-gold-premium/10">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="font-black text-slate-900 uppercase tracking-tight text-base mb-2">100% GST Compliance</h4>
              <p className="text-slate-500 text-[11.5px] leading-relaxed font-medium">
                Save 5% to 12% on travel audits. Get fully compliant, instantaneous commercial GST invoices and digital trip logs for your billing convenience.
              </p>
            </div>

            {/* Perk 2 */}
            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-200/40 shadow-sm text-left hover:border-gold-premium/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/5 flex items-center justify-center text-gold-premium mb-6 border border-gold-premium/10">
                <Star className="w-5 h-5" />
              </div>
              <h4 className="font-black text-slate-900 uppercase tracking-tight text-base mb-2">Elite Chauffeurs</h4>
              <p className="text-slate-500 text-[11.5px] leading-relaxed font-medium">
                Pristine uniformed drivers who are background-verified, highly trained, and fully familiar with corporate and hotel hospitality protocols.
              </p>
            </div>

            {/* Perk 3 */}
            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-200/40 shadow-sm text-left hover:border-gold-premium/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/5 flex items-center justify-center text-gold-premium mb-6 border border-gold-premium/10">
                <Settings className="w-5 h-5" />
              </div>
              <h4 className="font-black text-slate-900 uppercase tracking-tight text-base mb-2">24/7 Concierge Support</h4>
              <p className="text-slate-500 text-[11.5px] leading-relaxed font-medium">
                Dedicated Account Manager for cost-center accounting, consolidated monthly bills, priority dispatch, and last-minute flight delay adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobile Sticky CTA footer */}
      <div className="fixed bottom-0 left-0 w-full z-[100] md:hidden flex border-t border-slate-200 bg-white">
        <a href="tel:+917627013579" className="flex-1 bg-slate-950 text-white flex items-center justify-center gap-2 py-4.5 font-bold text-xs uppercase tracking-wider"><Phone className="w-4 h-4 text-gold-premium" /> Call Now</a>
        <a href="https://wa.me/917627013579" className="flex-1 bg-[#25D366] text-white flex items-center justify-center gap-2 py-4.5 font-bold text-xs uppercase tracking-wider"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
      </div>
    </main>
  );
}
