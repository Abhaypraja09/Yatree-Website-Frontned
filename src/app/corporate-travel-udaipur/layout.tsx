import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Travel Udaipur | Professional Cab Service for Business",
  description: "Reliable corporate travel solutions in Udaipur. We offer monthly car rental, employee transport, and business meeting cabs with GST billing & professional chauffeurs.",
  keywords: "corporate travel udaipur, business travel udaipur, corporate cab service, employee transport udaipur, monthly car rental udaipur, business meeting taxi",
  alternates: {
    canonical: "https://yatreedestination.com/corporate-travel-udaipur",
  },
};

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
