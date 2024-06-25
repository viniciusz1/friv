import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Header></Header>
        </header>
        {children}
      <footer>
        <Footer></Footer>
      </footer>
      </body>
    </html>
    </>
  );
}