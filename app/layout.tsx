import type { Metadata } from "next";
import "./global.scss";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Print Shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
