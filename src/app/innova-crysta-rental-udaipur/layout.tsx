import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innova Crysta Rental Udaipur | Luxury SUV on Rent",
  description: "Book Toyota Innova Crysta for rent in Udaipur. Premium 6/7 seater SUV for corporate travel, Rajasthan tours, and destination weddings. Expert chauffeurs.",
  keywords: "innova crysta rental udaipur, luxury suv udaipur, hire innova in udaipur, outstation taxi udaipur",
  alternates: {
    canonical: "https://yatreedestination.com/innova-crysta-rental-udaipur",
  },
};

export default function InnovaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
