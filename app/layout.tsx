import type { Metadata } from "next";
import "./global.scss";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { ClerkProvider, auth } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Print Shop",
  description: "Pierce Prints - High Qaulity 3D Prints",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const {userId, getToken} = auth();

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <TopBar userID={userId}/>
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
