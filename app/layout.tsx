import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { NationProvider } from "./globalstates/nationinfo";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "GeoPeek",
  description: "Discover facts about a country",
  icons: {
    icon: "/favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
          <NationProvider>
            <Navbar />
            <div className="mx-1px lg:pt-[13vh]">
              {children}
            </div>
          </NationProvider>
          <Footer />
      </body>
    </html>
  );
}
