import SessionWrapper from "@/components/SessionWrapper";
import type { Metadata } from "next";
import { inter, poppins, pacifico, yuji_mai, great_vibes } from "../components/fonts";
import "./globals.css";

import Footer from "@/components/Footer";
import ReduxProvider from "@/components/Cart/reduxprovider";
import Header from "@/components/header/header";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* sign in */}
    <SessionWrapper>
      <body className={(inter.variable, poppins.variable, pacifico.variable, yuji_mai.variable, great_vibes.variable)}>
        {/* <Header /> */}
        <ReduxProvider>
        {children}
        </ReduxProvider>

        <Footer />
      </body>
        {/* sign in */}
      </SessionWrapper>
    </html>
  );
}
