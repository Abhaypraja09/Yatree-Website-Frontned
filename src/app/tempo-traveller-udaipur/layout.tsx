import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tempo Traveller on Rent in Udaipur | Group Tour Packages",
  description: "Hire 12, 16, or 20 seater Maharaja Tempo Travellers in Udaipur for family trips, corporate group tours, and wedding logistics. Best rates guaranteed.",
  keywords: "tempo traveller udaipur, maharaja tempo traveller udaipur, group tour packages rajasthan, 12 seater tempo traveller udaipur",
  alternates: {
    canonical: "https://yatreedestination.com/tempo-traveller-udaipur",
  },
};

export default function TempoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
