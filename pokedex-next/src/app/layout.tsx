import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Pokedex using Next Js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
