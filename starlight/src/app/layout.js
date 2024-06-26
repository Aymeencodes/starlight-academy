
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserProvider from "./context/userContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
      <body className={inter.className}>
      <Navbar/>
      <div className=" min-h-screen relative overflow-hidden">
        {children}
      </div>
      <Footer/>
      </body>
      </UserProvider>
    </html>
  );
}
