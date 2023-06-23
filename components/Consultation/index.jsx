"use client";
import styles from "./index.module.css";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

const Consultation = () => {
  return (
    <div className={styles.about}>
      <div className={styles.overlay}></div>
      <div className={styles.consult}>
        <div className={styles.title}>
          <h2>Free Consulting</h2>
          <span>
            Please contact us for a free confidential one-hour consultation. We
            look forward to meeting you and earning your business.
          </span>
        </div>
        <form action="">
          <div className={styles.formGroup}>
            <input type="text" placeholder="Name*" />
            <input type="text" placeholder="Phone*" />
          </div>
          <div className={styles.formGroup}>
            <input type="text" placeholder="Address*" />
            <input type="text" placeholder="Email*" />
          </div>
          <textarea placeholder="Message*" name=""></textarea>
          <button type="submit">SUBMIT NOW</button>
        </form>
      </div>
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
