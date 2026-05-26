"use client";

import { useState, Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Sparkles,
  MapPin,
  Calendar,
  Clock,
  Car,
  Compass,
  ArrowRight,
  Info,
  CheckCircle,
  MessageCircle,
  Phone,
  Gem,
  Star,
  Users,
  ChevronLeft,
  ChevronRight,
  Map
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Place {
  id: string;
  name: string;
  tag: string;
  category: string;
  image: string;
  tagline: string;
  story: string;
  bestTime: string;
  duration: string;
  durationHours: number; // for dynamic calculation
  entryFee: string;
  recoVehicle: string;
  recoVehicleImg: string;
  highlights: string[];
  tips: string;
}

const PLACES: Place[] = [
  {
    id: "lake-palace",
    name: "Taj Lake Palace",
    tag: "THE FLOATING WATER MIRAGE",
    category: "Royal Heritage",
    image: "/udaipur.png", // High-res local asset
    tagline: "A pristine white marble sanctuary floating majestically upon the azure waters of Lake Pichola.",
    story: "Taj Lake Palace is a legendary love poem carved in white marble. Built in 1746 by Maharana Jagat Singh II as a summer pleasure palace, it represents the absolute zenith of Mewari luxury. Surrounded by calm lake waters, it offers a secluded royal sanctuary for the world's most elite travelers.",
    bestTime: "October to March (Golden Hour Sunset)",
    duration: "Exclusive boat ride access",
    durationHours: 2,
    entryFee: "Restricted to hotel guests & fine-dining patrons",
    recoVehicle: "Toyota Innova Crysta",
    recoVehicleImg: "/innova.png",
    highlights: ["Floating white marble architecture", "Panoramic Lake Pichola views", "Legendary royal hospitality", "Accessible via private boat deck"],
    tips: "Ensure a fine-dining reservation in advance to gain access to this private water sanctuary."
  },
  {
    id: "city-palace",
    name: "Udaipur City Palace",
    tag: "THE IMPERIAL MEWAR THRONE",
    category: "Royal Architecture",
    image: "/udaipur_atmospheric_about_bg_1778820777543.png", // High-res local asset
    tagline: "A towering fortress of granite, crystal, and historic mirror-work rising proudly over the lake.",
    story: "Wander through grand royal courtyards, secret corridors, and glass-tiled balconies where the Maharanas once stood. Built over 400 years by generations of Mewar rulers, the City Palace is the largest palace complex in Rajasthan, showcasing unparalleled architectural grandeur and imperial history.",
    bestTime: "9:30 AM - 4:30 PM (Early morning is less crowded)",
    duration: "2 - 3 Hours",
    durationHours: 3,
    entryFee: "₹250 per person (Extra for Crystal Gallery)",
    recoVehicle: "Maruti Suzuki Dzire",
    recoVehicleImg: "/dzire.png",
    highlights: ["Crystal Gallery & Durbar Hall", "Sheesh Mahal (Mirror Palace)", "Grand Mewar Museum collection", "Splendid aerial lake viewpoints"],
    tips: "Hire an authorized guide at the entrance to fully appreciate the legendary Mewar history."
  },
  {
    id: "udaivilas",
    name: "The Oberoi Udaivilas",
    tag: "THE ZENITH OF LUXURY RESORTS",
    category: "Luxury Resort",
    image: "/luxury_car_interior_premium_1778818423724.png", // High-res premium local asset
    tagline: "Symmetric golden domes reflecting in infinity pools under starry desert skies.",
    story: "Sprawled over 50 acres of historic royal hunting grounds, Udaivilas consistently ranks among the world's most luxurious resorts. Featuring private boat arrivals, symmetric lakeside garden pavilions, and a sprawling wildlife sanctuary, it offers a seamless blend of traditional royalty and modern elite comfort.",
    bestTime: "September to April (Sunset High-Tea)",
    duration: "Spa & Dining bookings required",
    durationHours: 2,
    entryFee: "Restricted entry (Dining or Spa reservations only)",
    recoVehicle: "Volkswagen Vento",
    recoVehicleImg: "/vento.png",
    highlights: ["Symmetric luxury garden pools", "Private boat arrival decks", "20-acre lush royal wildlife sanctuary", "Meticulous Mewari dome architecture"],
    tips: "Book a lakeside high-tea experience to enjoy the serene resort landscape during sunset."
  },
  {
    id: "jagmandir",
    name: "Jagmandir Island Palace",
    tag: "THE STONE ELEPHANT CASTLE",
    category: "Island Retreat",
    image: "/premium_udaipur_taxi_hero_1778818369975.png", // High-res premium local asset
    tagline: "Life-sized marble elephants standing guard on a serene 17th-century island castle.",
    story: "Built in 1620, Jagmandir is a floating pavilion of history and luxury. Once a sanctuary for Mughal Emperor Shah Jahan, it is renowned for its majestic stone elephants, calm marble domes, and peaceful lakeside gardens that offer an unmatched sense of tranquility.",
    bestTime: "10:00 AM - 6:00 PM (Best at late afternoon)",
    duration: "1 - 2 Hours",
    durationHours: 2,
    entryFee: "₹450 per person (Includes round-trip ferry ride)",
    recoVehicle: "Toyota Etios",
    recoVehicleImg: "/etios.png",
    highlights: ["Eight grand marble elephants guarding the lake", "Gol Mahal dome pavilion", "Premium quiet lakeside dining garden", "Historical sanctuary of Shah Jahan"],
    tips: "Catch the 4:30 PM boat to enjoy golden-hour photography and calm lake breezes."
  },
  {
    id: "monsoon-palace",
    name: "Monsoon Palace Sajjangarh",
    tag: "THE PEAK OF SUNSETS & CLOUDS",
    category: "Scenic Peak",
    image: "/udaipur.png", // High-res local asset
    tagline: "A majestic mountaintop fortress overlooking the entire valley, floating amidst clouds.",
    story: "Perched dramatically on the Bansdara peak 3,100 feet above sea level, Sajjangarh is the crown of the Aravalli range. Built in 1884 to track monsoon clouds and serve as a royal resort, it offers panoramic, breath-taking views of Udaipur’s entire lake system and sunset horizons.",
    bestTime: "4:00 PM - 6:30 PM (Sunset timing)",
    duration: "1.5 - 2 Hours",
    durationHours: 2,
    entryFee: "₹150 (Extra for forest department vehicles)",
    recoVehicle: "Toyota Innova Crysta",
    recoVehicleImg: "/innova.png",
    highlights: ["Panoramic hilltop lake sunset views", "Steep scenic mountain driving route", "Monsoon cloud watching corridors", "Sajjangarh Wildlife Sanctuary at the foothills"],
    tips: "Rent our Innova Crysta for a safe, smooth, and comfortable ride up the steep, winding mountain roads."
  },
  {
    id: "vintage-cars",
    name: "Royal Vintage Car Museum",
    tag: "THE GOLDEN AGE OF IMPERIAL WHEELS",
    category: "Vintage Museum",
    image: "/vintage_ambassador_udaipur_lake_1778820245635.png", // 100% Authentic local vintage car photo
    tagline: "Original Rolls-Royces, Cadillacs, and convertibles driven by the Maharanas themselves.",
    story: "Step into the private imperial garage of the Mewar Royal Family. Located in the former Mewar State Motor Garage, this collection features historic Rolls-Royce Phantoms, custom Cadillac convertibles, and rare vintage Mercedes-Benz cars, all preserved in absolute mint, running condition.",
    bestTime: "9:00 AM - 9:00 PM",
    duration: "1 Hour",
    durationHours: 1.5,
    entryFee: "₹400 per person",
    recoVehicle: "Toyota Innova Crysta",
    recoVehicleImg: "/innova.png",
    highlights: ["Original Rolls-Royce Phantom models", "Vintage imperial Cadillacs", "Custom classic Mercedes-Benz roadsters", "Rare 1930s Ford convertibles"],
    tips: "Visit in the evening and combine it with a royal dinner at the Garden Hotel nearby."
  }
];

const INSIDER_GUIDES = [
  {
    title: "Sheesh Mahal Fine Dining",
    type: "Lakeside Culinary",
    location: "The Leela Palace",
    rating: 5,
    description: "An open-air, two-level terrace restaurant offering spectacular views of Lake Pichola and the illuminated Lake Palace under a canopy of stars.",
    tip: "Reserve at least 2 weeks in advance; ask for a frontline table overlooking the water."
  },
  {
    title: "Dharohar Folk Dance",
    type: "Cultural Heritage",
    location: "Bagore Ki Haveli",
    rating: 5,
    description: "An authentic, high-energy 1-hour cultural show featuring traditional Rajasthani folk dances, puppetry, and gravity-defying brass pot balancing acts.",
    tip: "Show starts at 7:00 PM daily. Arrive by 6:15 PM to secure front-row seating mats."
  },
  {
    title: "Sunset Pichola Yachting",
    type: "VIP Experience",
    location: "Lake Pichola Charter",
    rating: 5,
    description: "Charter a private, luxury upholstered pontoon boat or royal heritage boat for a private cruise around Jagmandir and Taj Lake Palace.",
    tip: "Book the 5:15 PM slot to witness the shift of sky colors and the grand palace lights turning on."
  },
  {
    title: "Ambrai Ghat Sunset",
    type: "Scenic Splendor",
    location: "Waterfront Ghat",
    rating: 5,
    description: "The most iconic viewpoint in Udaipur, offering a direct eye-level perspective of Lake Palace and the majestic City Palace facade.",
    tip: "Best visited right at twilight. Wear comfortable shoes as the streets leading to the ghat are very narrow."
  }
];

function ExploreShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePlace = PLACES[activeIndex];
  
  // Custom vehicle selection per landmark state
  const [customCarSelection, setCustomCarSelection] = useState<Record<string, string>>({});

  const VEHICLE_OPTIONS = [
    { name: "Toyota Innova Crysta", img: "/innova.png", description: "Premium 7-seater, unmatched royal comfort for standard city tours & hilly Sajjangarh roads." },
    { name: "Premium Sedan (Dzire/Etios)", img: "/etios.png", description: "Perfect 4-seater executive sedan for small groups or romantic lake routes." },
    { name: "Volkswagen Vento", img: "/vento.png", description: "Sleek German-engineered sedan providing refined comfort for multi-destination tours." },
    { name: "Force Traveller (12 Seater)", img: "/tempo.png", description: "Spacious 12-seater pushback minibus with chilled dual A/C for large family parties." },
    { name: "Force Traveller (17 Seater)", img: "/traveller-17.png", description: "Heavy-duty 17-seater minibus for wedding guest logistics and large sightseeing groups." }
  ];

  const currentVehicleName = customCarSelection[activePlace.id] || activePlace.recoVehicle;
  const currentVehicle = VEHICLE_OPTIONS.find(v => v.name === currentVehicleName) || VEHICLE_OPTIONS[0];

  const handleVehicleChange = (name: string) => {
    setCustomCarSelection(prev => ({ ...prev, [activePlace.id]: name }));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % PLACES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + PLACES.length) % PLACES.length);
  };

  const handleWhatsAppInquiry = (place: Place) => {
    const chosenCar = customCarSelection[place.id] || place.recoVehicle;
    const whatsappNumber = "917627013579";
    const text = `*YATREE DESTINATION - ROYAL SIGHTSEEING INQUIRY*\n` +
                 `----------------------------------------\n` +
                 `💎 *Imperial Destination:* ${place.name}\n` +
                 `👑 *Class Profile:* ${place.tag}\n` +
                 `🚕 *Selected Vehicle:* ${chosenCar}\n` +
                 `----------------------------------------\n` +
                 `I want to book private sightseeing and premium transport for this location. Please customize my package!`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  // Dynamically redirect based on vehicle type selected!
  const isBus = currentVehicle.name.includes("Traveller");
  const bookingUrl = `/booking?type=${isBus ? "bus" : "car"}`;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12">
      
      {/* Cinematic Showcase Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Traditional Jharokha (Archway) Frame Visual */}
        <div className="lg:col-span-6 flex flex-col items-center">
          
          <div className="relative w-full max-w-[500px] aspect-[4/5] bg-white border border-slate-200/50 p-4 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden group">
            
            {/* Mewar Arched Border Frame Overlay */}
            <div className="absolute inset-0 border-[8px] border-double border-gold-premium/30 rounded-[2.8rem] pointer-events-none z-30 m-2" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none z-20" />

            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-slate-900">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePlace.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={activePlace.image}
                    alt={activePlace.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover pointer-events-none"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-black/30 z-10" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="absolute bottom-8 right-8 z-40 flex gap-2.5">
              <button
                onClick={handlePrev}
                aria-label="Previous Spot"
                className="w-12 h-12 rounded-full bg-white/90 hover:bg-gold-premium backdrop-blur-md border border-slate-200 text-slate-900 hover:text-midnight flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Spot"
                className="w-12 h-12 rounded-full bg-white/90 hover:bg-gold-premium backdrop-blur-md border border-slate-200 text-slate-900 hover:text-midnight flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Category tag */}
            <div className="absolute top-8 left-8 z-40">
              <span className="bg-slate-950/85 backdrop-blur-md border border-white/20 text-gold-premium text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-md flex items-center gap-1.5">
                <Gem className="w-3.5 h-3.5" />
                {activePlace.category}
              </span>
            </div>
          </div>

          {/* Active Counters */}
          <div className="flex items-center gap-4 mt-6 text-slate-400 font-black text-xs uppercase tracking-widest">
            <span className="text-gold-premium text-base">0{activeIndex + 1}</span>
            <div className="w-16 h-[2px] bg-slate-200 relative">
              <motion.div 
                className="absolute h-full bg-gold-premium left-0 top-0"
                initial={{ width: 0 }}
                animate={{ width: `${((activeIndex + 1) / PLACES.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <span>0{PLACES.length}</span>
          </div>

        </div>

        {/* Right Column: Premium Royal Storytelling & Concierge Details */}
        <div className="lg:col-span-6 text-left flex flex-col justify-between self-stretch py-2">
          
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-gold-premium text-xs font-black tracking-[0.25em] uppercase block">{activePlace.tag}</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter leading-none m-0">
                {activePlace.name}
              </h2>
              <p className="text-slate-700 text-sm font-extrabold italic leading-relaxed pt-2">
                "{activePlace.tagline}"
              </p>
            </div>

            <div className="border-l-2 border-gold-premium pl-6 my-6">
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-semibold">
                {activePlace.story}
              </p>
            </div>

            {/* Travel Specs Panel */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 p-4.5 rounded-[1.8rem] flex gap-3 text-left shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:border-gold-premium/30 transition-all">
                <Clock className="w-5 h-5 text-gold-premium shrink-0" />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Duration Needed</span>
                  <span className="text-xs font-extrabold text-slate-900 uppercase block">{activePlace.duration}</span>
                </div>
              </div>
              
              <div className="bg-white border border-slate-200 p-4.5 rounded-[1.8rem] flex gap-3 text-left shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:border-gold-premium/30 transition-all">
                <Calendar className="w-5 h-5 text-gold-premium shrink-0" />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Best Time to Visit</span>
                  <span className="text-xs font-extrabold text-slate-900 uppercase block">{activePlace.bestTime}</span>
                </div>
              </div>
            </div>

            {/* Entry Fee panel */}
            <div className="bg-white border border-slate-200 p-4.5 rounded-[1.8rem] flex gap-3 text-left shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:border-gold-premium/30 transition-all">
              <Info className="w-5 h-5 text-gold-premium shrink-0" />
              <div className="space-y-0.5">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Entry Tickets & Access</span>
                <span className="text-xs font-bold text-slate-700 leading-normal block">{activePlace.entryFee}</span>
              </div>
            </div>

            {/* Luxury Chauffeur Reco Box - NOW INTERACTIVE! */}
            <div className="bg-amber-500/5 border border-gold-premium/20 rounded-[1.8rem] p-5 flex items-center justify-between gap-4 shadow-sm relative overflow-hidden">
              <div className="text-left relative z-10 flex-1">
                <span className="text-[9px] font-black uppercase tracking-wider text-gold-premium block mb-0.5">Select Your Custom Carriage</span>
                
                {/* Custom Custom styled Select Dropdown wrapper */}
                <div className="relative inline-block w-full mt-1.5">
                  <select
                    value={currentVehicleName}
                    onChange={(e) => handleVehicleChange(e.target.value)}
                    className="w-full bg-white hover:bg-slate-50 text-slate-950 font-black text-sm uppercase tracking-tight py-2 px-3 pr-8 rounded-xl border border-slate-200 outline-none cursor-pointer appearance-none transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)] focus:border-gold-premium/65 focus:ring-1 focus:ring-gold-premium/20"
                  >
                    {VEHICLE_OPTIONS.map((opt) => (
                      <option key={opt.name} value={opt.name} className="text-slate-900 bg-white font-semibold">
                        {opt.name}
                      </option>
                    ))}
                  </select>
                  {/* Custom Arrow */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gold-premium">
                    <ChevronRight className="w-4 h-4 rotate-90 shrink-0" />
                  </div>
                </div>

                <p className="text-[10px] text-slate-500 leading-tight font-semibold mt-2.5">
                  {currentVehicle.description}
                </p>
              </div>
              
              {/* Blended vehicle photo preview */}
              <div className="relative z-10 w-24 h-14 shrink-0 flex items-center justify-center bg-white rounded-xl border border-slate-100 p-1 shadow-sm transition-all duration-300">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentVehicle.name}
                    src={currentVehicle.img} 
                    alt={currentVehicle.name} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full object-contain mix-blend-multiply" 
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a 
              href={bookingUrl}
              className="flex-1 bg-slate-950 hover:bg-gold-premium hover:text-midnight text-white font-black uppercase tracking-widest py-4.5 rounded-xl transition-all text-xs text-center flex items-center justify-center gap-1.5 shadow-md shadow-slate-950/10 cursor-pointer"
            >
              <Car className="w-4 h-4" />
              Reserve Chauffeur Taxi
            </a>

            <button
              onClick={() => handleWhatsAppInquiry(activePlace)}
              className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black uppercase tracking-widest py-4.5 rounded-xl transition-all text-xs flex items-center justify-center gap-2 shadow-md shadow-green-500/15 cursor-pointer border border-green-500/10"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Plan Tour via WhatsApp
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

function ItineraryPlanner() {
  const [selectedSpots, setSelectedSpots] = useState<string[]>(["lake-palace", "city-palace"]);

  const toggleSpot = (id: string) => {
    setSelectedSpots((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculations
  const selectedObjects = PLACES.filter((spot) => selectedSpots.includes(spot.id));
  const totalHours = selectedObjects.reduce((acc, curr) => acc + curr.durationHours, 0);
  
  // Custom vehicle recommendation algorithm
  const hasSajjangarh = selectedSpots.includes("monsoon-palace");
  const spotCount = selectedSpots.length;

  let recommendedCar = "Maruti Suzuki Dzire";
  let recommendedCarImg = "/dzire.png";
  let reason = "Perfect sedan for up to 4 travelers on flat city transit.";

  if (hasSajjangarh) {
    recommendedCar = "Toyota Innova Crysta";
    recommendedCarImg = "/innova.png";
    reason = "Required for a safe, comfortable, and smooth drive up the steep, winding mountain roads of Sajjangarh peak.";
  } else if (spotCount > 4) {
    recommendedCar = "Toyota Innova Crysta";
    recommendedCarImg = "/innova.png";
    reason = "Spacious layout recommended for full-day intensive multi-spot luxury travel.";
  } else if (spotCount >= 3) {
    recommendedCar = "Volkswagen Vento";
    recommendedCarImg = "/vento.png";
    reason = "Premium German-engineered sedan offering enhanced luxury suspension for multiple destinations.";
  }

  const handleWhatsAppItinerary = () => {
    if (selectedObjects.length === 0) return;
    
    const whatsappNumber = "917627013579";
    const spotsText = selectedObjects.map((s, i) => `${i + 1}. ${s.name} (${s.category})`).join("\n");
    
    const text = `*YATREE DESTINATION - BESPOKE TOUR ITINERARY*\n` +
                 `----------------------------------------\n` +
                 `📍 *Selected Sights:* \n${spotsText}\n\n` +
                 `⏱️ *Total Estimated Tour Duration:* ~ ${totalHours} Hours\n` +
                 `🚗 *Suggested Chauffeur Fleet:* ${recommendedCar}\n` +
                 `----------------------------------------\n` +
                 `I would like to lock in this private sightseeing route. Please customize my package and send me quotes!`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] p-6 md:p-10 text-left relative overflow-hidden">
        
        {/* Decorative Golden Corner */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-premium/10 to-transparent rounded-bl-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sights selector */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="bg-gold-premium/15 text-gold-premium text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full inline-block mb-3">
                Interactive Travel Planner
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-none uppercase">
                Bespoke Royal Planner
              </h3>
              <p className="text-xs md:text-sm text-slate-500 mt-2 font-medium">
                Check-box the palaces and landmarks you wish to experience. We'll instantly calculate the time and suggest the ultimate chauffeur carriage.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {PLACES.map((place) => {
                const isSelected = selectedSpots.includes(place.id);
                return (
                  <button
                    key={place.id}
                    onClick={() => toggleSpot(place.id)}
                    className={`flex items-start gap-3.5 p-3.5 rounded-2xl border text-left transition-all ${
                      isSelected 
                        ? "bg-amber-500/5 border-gold-premium shadow-[0_4px_15px_rgba(212,175,55,0.05)]" 
                        : "bg-slate-50 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                      isSelected ? "bg-gold-premium border-gold-premium text-white" : "border-slate-300 bg-white"
                    }`}>
                      {isSelected && <CheckCircle className="w-4 h-4 text-slate-900 shrink-0" />}
                    </div>
                    <div>
                      <span className="text-xs font-black text-slate-900 block leading-tight">{place.name}</span>
                      <span className="text-[9px] font-bold text-gold-premium uppercase tracking-widest block mt-0.5">{place.category}</span>
                      <span className="text-[9px] text-slate-400 font-semibold block mt-1">{place.duration}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Specs Sidebox */}
          <div className="lg:col-span-5 self-stretch bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col justify-between">
            
            <div className="space-y-6">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-3">
                Live Itinerary Output
              </h4>

              {selectedSpots.length === 0 ? (
                <div className="py-12 text-center text-slate-400">
                  <Compass className="w-10 h-10 mx-auto text-slate-300 mb-2 animate-pulse" />
                  <p className="text-xs font-bold uppercase tracking-wider">Select spots to start</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Selected Sights</span>
                      <span className="text-xl font-black text-slate-900">{selectedSpots.length} Locations</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Estimated Time</span>
                      <span className="text-xl font-black text-gold-premium">~ {totalHours} Hours</span>
                    </div>
                  </div>

                  {/* Recommended Vehicle Pedestal */}
                  <div className="bg-white border border-slate-200/80 rounded-2xl p-4.5 relative overflow-hidden shadow-sm">
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-1">Recommended Carriage</span>
                    
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h5 className="font-extrabold text-sm text-slate-950 uppercase tracking-tight">{recommendedCar}</h5>
                        <p className="text-[10px] text-slate-500 font-semibold leading-snug mt-1">{reason}</p>
                      </div>
                      
                      {/* Vehicle Image */}
                      <div className="w-20 h-12 shrink-0 bg-slate-50 rounded-xl border border-slate-100 p-1 flex items-center justify-center">
                        <img 
                          src={recommendedCarImg} 
                          alt="Car Reco" 
                          className="w-full h-full object-contain mix-blend-multiply" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={handleWhatsAppItinerary}
              disabled={selectedSpots.length === 0}
              className={`w-full font-black uppercase tracking-widest py-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all mt-6 ${
                selectedSpots.length > 0
                  ? "bg-[#25D366] hover:bg-[#20ba5a] text-white cursor-pointer shadow-green-500/10 active:scale-95"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }`}
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Book Custom Tour via WhatsApp
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default function ExploreUdaipurPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 selection:bg-gold-premium selection:text-midnight pt-20 md:pb-0 pb-16">
      <Navbar />
      
      {/* 1. Luminous Premium Hero with Full-Bleed Parallax */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden py-24 text-center">
        
        {/* Breathtaking Local Image Backdrop with Dark glassmorphic layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/udaipur.png"
            alt="Udaipur Panoramic"
            fill
            sizes="100vw"
            className="object-cover scale-105 pointer-events-none"
            priority
          />
          {/* Ultra-luxury dark gold-ambient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/60 to-slate-950/90" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gold-premium/5 rounded-full blur-[120px] pointer-events-none" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
           <motion.div 
             initial={{ opacity: 0, y: 30 }} 
             animate={{ opacity: 1, y: 0 }} 
             transition={{ duration: 0.8 }}
             className="space-y-6"
           >
             <span className="bg-gold-premium/15 border border-gold-premium/35 text-gold-premium font-black uppercase tracking-[0.25em] text-[10px] px-5 py-2 rounded-full inline-flex items-center gap-1.5">
               <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Venice of the East
             </span>
             <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">
               Explore <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-premium to-gold-light">Udaipur</span>
             </h1>
             <p className="text-xs md:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed font-semibold">
               Step into an oasis of imperial heritage, glittering lakes, and pristine white marble sanctuaries. Craft your dream sightseeing route and navigate the legendary royal spots with Yatree's elite private chauffeurs.
             </p>
             
             <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a 
                  href="#heritage" 
                  className="bg-gold-premium hover:bg-gold-light text-midnight px-8 py-4.5 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center gap-2 transition-all shadow-lg active:scale-95 cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-slate-950" /> Browse Showroom
                </a>
                <a 
                  href="#planner" 
                  className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-4.5 rounded-xl font-black uppercase tracking-widest text-[10px] hover:text-white transition-all flex items-center gap-2 active:scale-95 shadow-sm cursor-pointer"
                >
                  <Map className="w-4 h-4 text-gold-premium" /> Build Custom Route
                </a>
             </div>
           </motion.div>
        </div>
      </section>

      {/* 2. Interactive Cinematic Showcase */}
      <section id="heritage" className="py-20 bg-transparent text-center border-t border-slate-200/50">
        <div className="container mx-auto px-6 mb-12">
          <span className="text-gold-premium text-[10px] font-black tracking-[0.25em] uppercase block mb-1">Elite Landmarks</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">Royal Sightseeing</h2>
          <p className="text-slate-500 max-w-md mx-auto text-xs md:text-sm font-semibold mt-2">
            Flip through Udaipur's absolute premium venues. Recommended vehicles display authentic shadow blending.
          </p>
        </div>

        <Suspense fallback={
          <div className="container mx-auto px-6 py-20 text-center">
            <div className="w-12 h-12 border-4 border-gold-premium border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Loading Showroom...</p>
          </div>
        }>
          <ExploreShowcase />
        </Suspense>
      </section>

      {/* 3. Dynamic Royal Itinerary Planner Section */}
      <section id="planner" className="py-20 bg-white border-t border-b border-slate-200/50 text-center">
        <div className="container mx-auto px-6 mb-4">
          <span className="text-gold-premium text-[10px] font-black tracking-[0.25em] uppercase block mb-1">Tailor Your Journey</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">Itinerary Planner</h2>
          <p className="text-slate-500 max-w-md mx-auto text-xs md:text-sm font-semibold mt-2">
            Select multiple points of interest to instantly receive travel times, mountain peak notices, and customized taxi recommendations.
          </p>
        </div>

        <ItineraryPlanner />
      </section>

      {/* 4. Luxury Udaipur Insider Guide */}
      <section className="py-20 bg-transparent text-center">
        <div className="container mx-auto px-6 mb-12">
          <span className="text-gold-premium text-[10px] font-black tracking-[0.25em] uppercase block mb-1">Concierge Curated</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">Luxury Insider Guide</h2>
          <p className="text-slate-500 max-w-md mx-auto text-xs md:text-sm font-semibold mt-2">
            Beyond sightseeing, experience Udaipur like royalty. Curated dining, folk events, and private lake cruises.
          </p>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {INSIDER_GUIDES.map((guide, i) => (
              <div 
                key={guide.title}
                className="bg-white border border-slate-200 p-6.5 rounded-3xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="bg-amber-500/10 text-amber-700 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
                      {guide.type}
                    </span>
                    <div className="flex gap-0.5 text-gold-premium">
                      {Array.from({ length: guide.rating }).map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-base font-black text-slate-950 uppercase tracking-tight">{guide.title}</h4>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-gold-premium" />
                      {guide.location}
                    </span>
                  </div>

                  <p className="text-slate-600 text-[11px] font-medium leading-relaxed">
                    {guide.description}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 mt-6">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Insider Recommendation</span>
                  <p className="text-slate-700 text-[10px] font-bold mt-1 leading-snug">
                    "{guide.tip}"
                  </p>
                </div>
              </div>
            ))}
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
