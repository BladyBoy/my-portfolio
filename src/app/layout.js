import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Ravi Boddapati | Portfolio",
  description: "A portfolio showcasing the projects and skills of Ravi Boddapati.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} bg-gray-900`}>
        <Navbar /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}

