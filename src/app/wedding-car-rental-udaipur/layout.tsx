import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Car Rental Udaipur | Luxury Wedding Taxi & Vintage Cars",
  description: "Make your destination wedding in Udaipur unforgettable with our luxury wedding car rental services. Premium fleet for guest transport and vintage cars for the couple.",
  keywords: "wedding car rental udaipur, luxury wedding cars udaipur, vintage car rental for weddings udaipur, wedding guest transportation udaipur, baraat cars udaipur",
  alternates: {
    canonical: "https://yatreedestination.com/wedding-car-rental-udaipur",
  },
};

export default function WeddingCarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
