import type { Metadata } from "next";
import localFont from "next/font/local";
import { Space_Grotesk } from 'next/font/google';
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

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
  title: "Eytta Technologies | Digital Transformation Solutions",
  description: "Eytta Technologies - Your trusted partner in digital transformation and software solutions. We specialize in web development, mobile apps, and enterprise solutions.",
  keywords: "digital transformation, software development, web development, mobile apps, enterprise solutions",
  openGraph: {
    title: "Eytta Technologies | Digital Transformation Solutions",
    description: "Your trusted partner in digital transformation and software solutions",
    url: "https://eytta.com",
    siteName: "Eytta Technologies",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eytta Technologies"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eytta Technologies | Digital Transformation Solutions",
    description: "Your trusted partner in digital transformation and software solutions",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-[#FAFAFA]`}
      >
        {children}
      </body>
    </html>
  );
}
