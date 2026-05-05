/* eslint-disable @next/next/no-page-custom-font */
import Navbar from '../components/Navbar';
import "./globals.css";

export default function RootLayout({
  children,
} : {
  children : React.ReactNode;
}) {
  return (
    <html>
        <head>
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap"
      rel="stylesheet"
    />
  </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}