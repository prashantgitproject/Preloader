import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pesto Preloader",
  description: "A simple preloader for your website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-[100vh]">
        <Toaster/>
        {children}
        </main>
      </body>
    </html>
  );
}
