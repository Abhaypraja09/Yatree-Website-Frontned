import BookingClient from "./BookingClient";
import { Metadata } from "next";

export function generateStaticParams() {
  return [
    { type: [] },       // Matches /booking
    { type: ["car"] },  // Matches /booking/car
    { type: ["bus"] },  // Matches /booking/bus
  ];
}

export const metadata: Metadata = {
  title: "Book Taxi or Bus in Udaipur | Yatree Destination",
  description: "Instant booking for premium sedans, SUVs, and Tempo Travellers in Udaipur.",
};

export default function Page() {
  return <BookingClient />;
}
