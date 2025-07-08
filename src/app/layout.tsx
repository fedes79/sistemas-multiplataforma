import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "Mi Blog",
  description: "Una plataforma moderna para compartir conocimientos sobre tecnología, diseño y desarrollo web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <main className="flex-grow-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}