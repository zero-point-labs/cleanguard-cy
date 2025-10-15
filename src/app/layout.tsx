import type { Metadata } from "next";
import { Inter, Noto_Sans, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin", "greek"],
  variable: "--font-inter"
});

const notoSans = Noto_Sans({ 
  subsets: ["latin", "greek"],
  variable: "--font-noto-sans"
});

const openSans = Open_Sans({ 
  subsets: ["latin", "greek"],
  variable: "--font-open-sans"
});

export const metadata: Metadata = {
  title: "Clean Guard Pest Control Cyprus - Απεντόμωση Κύπρος",
  description: "Η Cleanguard ειναι διπλα σας για ενα καθαρο και ασφαλη χωρο. Επαγγελματικές υπηρεσίες απεντόμωσης στην Κύπρο.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body className={`${notoSans.variable} ${inter.variable} ${openSans.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
