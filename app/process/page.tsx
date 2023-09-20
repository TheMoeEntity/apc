import React from "react";
import ProcessPage from "../../components/ProcessPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Nosrati Law Group | Process",
  description: "The estate planning process",
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/favicon.ico", type: "image/png" },
  },
};
const Process = () => {
  return <ProcessPage />;
};

export default Process;
