import ContactPage from "../../components/ContactPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Nosrati Law Group | Contact Us",
  description: "Contact page for Nosrati law group",
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/favicon.ico", type: "image/png" },
  },
};
const Contact = () => {
  return <ContactPage />;
};

export default Contact;
