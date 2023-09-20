import React from "react";
import ServicePage from "../../components/ServicePage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Nosrati Law Group | Services",
  description: "Our legal services",
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/favicon.ico", type: "image/png" },
  },
};
const Services = () => {
  return <ServicePage />;
};

export default Services;
