import React from "react";
import { FeesPage } from "../../components/FeesPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Nosrati Law Group | Fees",
  description: "Fees and legal practice areas",
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/favicon.ico", type: "image/png" },
  },
};

const page = () => {
  return <FeesPage />;
};

export default page;
