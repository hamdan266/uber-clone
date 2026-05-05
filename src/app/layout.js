import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: "Uber | Go Anywhere",
    template: "%s | Uber",
  },
  description:
    "Uber - Go anywhere with Uber. Request a ride, hop in, and go.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable} suppressHydrationWarning>{children}</body>
    </html>
  );
}
