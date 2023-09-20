import { Metadata } from "next";
import React from "react";
import AboutPage from "../../components/AboutPage";

export const metadata: Metadata = {
  title: "Nosrati Law Group | About Us",
  description: "About Nosrati law group",
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/favicon.ico", type: "image/png" },
  },
};
const page = () => {
  return <AboutPage />;
};

export default page;
