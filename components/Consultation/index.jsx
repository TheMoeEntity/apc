"use client";
import styles from "./index.module.css";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

const Consultation = () => {
  return (
    <div className={styles.about}>
      <div className={styles.overlay}></div>
      <div className={styles.consult}></div>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[{ image: "/images/law2.png", speed: -30 }]}
          className={`aspect-[2/1] ${styles.banner}`}
        ></ParallaxBanner>
      </ParallaxProvider>
    </div>
  );
};

export { Consultation };
