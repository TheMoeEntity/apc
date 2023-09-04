"use client";
import { Header } from "./Header/index";
import Script from "next/script";
import { SnackbarProvider } from "notistack";
import Footer from "./Footer/index.tsx";
import { usePathname } from "next/navigation";
import { Helpers } from "../helpers";

const Layout = ({ children }) => {
  const pathname = usePathname();

  return (
    <SnackbarProvider
      classes={{ containerRoot: "z-alert" }}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
    >
      {Helpers.checkValid(pathname) && <Header />}
      {children}
      <Script
        src="https://kit.fontawesome.com/4ef8c63dd7.js"
        crossOrigin="anonymous"
      ></Script>
      {Helpers.checkValid(pathname) && <Footer />}
    </SnackbarProvider>
  );
};

export default Layout;
