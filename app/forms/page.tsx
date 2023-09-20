import React from "react";
import { FormsPage } from "../../components/FormsPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Nosrati Law Group | Forms",
  description: "Forms and legal documents",
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/favicon.ico", type: "image/png" },
  },
};
const Forms = () => {
  return <FormsPage />;
};

export default Forms;
