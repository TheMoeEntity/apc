import React from "react";
import { TestimonialPage } from "../../components/TestimonialPage";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Nosrati Law Group | Testimonials",
  description: "Client Testimonials: Our Trusted Estate Planning Services",
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/favicon.ico", type: "image/png" },
  },
};
const Testimonials = () => {
  return <TestimonialPage />;
};

export default Testimonials;
