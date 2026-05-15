import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Yatree Destination | Premium Travel & Taxi Service in Udaipur",
  description: "Discover the story of Yatree Destination, Udaipur's leading agency for luxury travel, wedding car rental, and corporate transportation. Our mission is safety, punctuality, and comfort.",
  keywords: "about yatree destination, udaipur travel agency story, reliable taxi udaipur, professional travel partner rajasthan",
  alternates: {
    canonical: "https://yatreedestination.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
