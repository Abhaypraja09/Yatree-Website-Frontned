import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airport Taxi Udaipur | 24/7 Reliable Cab Service @ Maharana Pratap Airport",
  description: "Book punctual airport taxi service in Udaipur. We offer 24/7 airport pickup & drop services from Maharana Pratap Airport (UDA) with meet & greet service.",
  keywords: "airport taxi udaipur, udaipur airport cab, maharana pratap airport taxi, airport pickup udaipur, airport drop udaipur, udaipur airport taxi fare",
  alternates: {
    canonical: "https://yatreedestination.com/airport-taxi-udaipur",
  },
};

export default function AirportTaxiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
