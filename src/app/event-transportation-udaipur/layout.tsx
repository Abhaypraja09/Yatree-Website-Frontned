import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Transportation Services Udaipur | VIP & Group Travel",
  description: "Specialized logistics and group transportation for concerts, VIP events, and corporate summits across Rajasthan. Scalable solutions for any event size.",
  keywords: "event transportation udaipur, group travel rajasthan, vip travel udaipur, conference transport services",
  alternates: {
    canonical: "https://yatreedestination.com/event-transportation-udaipur",
  },
};

export default function EventLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
