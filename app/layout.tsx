import "./globals.css";
import { Inter } from "next/font/google";
import Layout from "../components/layout";

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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
