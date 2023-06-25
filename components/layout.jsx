"use client";
import { Header } from "./Header";
import Script from "next/script";
import { SnackbarProvider } from "notistack";
import Footer from "./Footer";
import { usePathname } from 'next/navigation' 

const Layout = ({ children }) => {
  const pathname = usePathname()

  return (
    <SnackbarProvider
      classes={{ containerRoot: "z-alert" }}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
    >
      {
        pathname !== '/' ? (<></>): (<Header />)
      }
      {children}
      <Script
        src="https://kit.fontawesome.com/4ef8c63dd7.js"
        crossorigin="anonymous"
      ></Script>
      {
        pathname !== '/' ? (<></>): (<Footer />)
      }
    </SnackbarProvider>
  );
};

export default Layout;
