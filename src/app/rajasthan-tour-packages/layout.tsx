import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rajasthan Tour Packages | Explore Udaipur, Jodhpur, Jaipur & Beyond",
  description: "Book customized Rajasthan tour packages from Udaipur. Explore the royal heritage of Jaipur, Jodhpur, Jaisalmer, and Mount Abu with our premium taxi services.",
  keywords: "rajasthan tour packages, udaipur to jaipur taxi, udaipur to jodhpur cab, rajasthan sightseeing tour, custom tour packages udaipur, udaipur to jaisalmer taxi",
  alternates: {
    canonical: "https://yatreedestination.com/rajasthan-tour-packages",
  },
};

export default function RajasthanTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
