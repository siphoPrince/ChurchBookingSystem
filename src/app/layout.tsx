import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FormComponent from "./Components/form";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Church Booking",
  description: "Make your bookings now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="flex justify-center mt-20 font-bold">
          <h1>Church Bookings</h1>
        </nav>
        {/* Render the FormComponent below the main content */}
        <FormComponent />
      </body>
    </html>
  );
}
