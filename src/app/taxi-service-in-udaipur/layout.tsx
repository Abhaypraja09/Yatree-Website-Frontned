import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Taxi Service in Udaipur | #1 Reliable Cab Service in Udaipur",
  description: "Book the top-rated taxi service in Udaipur for local sightseeing, outstation trips, and airport transfers. Professional drivers, transparent pricing, and 24/7 support.",
  keywords: "taxi service in udaipur, cab service in udaipur, best taxi in udaipur, udaipur taxi booking, local sightseeing taxi udaipur, outstation cab udaipur",
  alternates: {
    canonical: "https://yatreedestination.com/taxi-service-in-udaipur",
  },
};

export default function TaxiServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
