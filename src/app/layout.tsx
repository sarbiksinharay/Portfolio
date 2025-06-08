import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

// DM Sans - closest alternative to MD Sans with similar characteristics
// Modern, clean, and highly readable font perfect for UI/UX
const mdSans = DM_Sans({
  variable: "--font-md-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Sarbik Sinha Ray - Full Stack Developer",
  description: "Developer ",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development", "UI/UX"],
  authors: [{ name: "Sarbik Sinha Ray" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mdSans.variable} dark`}>
      <body
        className={`${mdSans.variable} font-md-sans antialiased bg-black text-white mobile-scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
