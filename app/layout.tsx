/* eslint-disable @next/next/no-page-custom-font */
import Navbar from "../components/Navbar";
import Footer from "../components/footer"
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&amp;family=Space+Grotesk:wght@600&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0b1326] text-[#dae2fd] font-sans min-h-screen selection:bg-cyan-300 selection:text-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
