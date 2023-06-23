import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nosrati Law Group",
  description:
    "NLG is a boutique client-centered practice specializing in estate planning",
    icons: {
      icon: {
        url: "/favicon.png",
        type: "image/png",
      },
      shortcut: { url: "/favicon.ico", type: "image/png" },
    },
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          src="https://kit.fontawesome.com/4ef8c63dd7.js"
          crossorigin="anonymous"
        ></Script>
        {children}
      </body>
    </html>
  );
}
