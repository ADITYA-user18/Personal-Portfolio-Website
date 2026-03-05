import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: 'swap' });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: 'swap' });

export const metadata = {
  title: "Aditya Wandakar | Full Stack Engineer",
  description: "Portfolio of a Full Stack Engineer specializing in MERN stack and Computer Vision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-white/20 selection:text-white font-sans text-gray-200 bg-[#030303] md:cursor-none">
        <main>{children}</main>
      </body>
    </html>
  );
}