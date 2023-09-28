import React from "react";
import { ResourcesPage } from "../../components/ResourcesPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Nosrati Law Group | Resources",
  description: "Forms and legal documents",
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/favicon.ico", type: "image/png" },
  },
};
const Resources = () => {
  return <ResourcesPage />;
};

export default Resources;
