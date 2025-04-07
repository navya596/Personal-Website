import type { Metadata } from "next";
import { Raleway } from "next/font/google"; // Import Raleway font
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContentProvider from "@/context/active-section-context";

// Applying Raleway font
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Navya Ahuja | Personal Portfolio",
  description:
    "Navya Ahuja is a Software Engineering student at Mcmaster University passionate about building innovative digital experiences, blending technology, design, and creativity. Check out their recent projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${raleway.className} bg-gray-900 text-gray-50 relative pt-28 sm:pt-36 `}
      >
        <div className="bg-[#219276] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#103977] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ActiveSectionContentProvider>
          <Header />
          {children}
        </ActiveSectionContentProvider>
      </body>
    </html>
  );
}
