"use client";
import styles from "../../app/page.module.css";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import { useResize, useSubmit } from "../../helpers/hooks";

const Consultation = () => {
  const { submit, handlesubmit } = useSubmit();
  const { val, setVal, textAreaRef } = useResize();

  return (
    <div id="contact" className={styles.about}>
      <div className={styles.overlay}></div>
      <div className={styles.consult}>
        <div className={styles.title}>
          <h2>Free Consultation</h2>
          <span>
            Please contact us for a free confidential one-hour consultation. We
            look forward to meeting you and earning your business.
          </span>
        </div>
        <form onSubmit={handlesubmit}>
          <div className={styles.formGroup}>
            <input type="text" placeholder="Name*" required />
            <input type="text" placeholder="Phone*" required />
          </div>
          <div className={styles.formGroup}>
            <input type="text" placeholder="Address*" required />
            <input type="text" placeholder="Email*" />
          </div>
          <textarea
            placeholder="Message*"
            name=""
            id=""
            cols={10}
            ref={textAreaRef}
            value={val}
            onChange={(e) => setVal(e.target.value)}
            rows={1}
          ></textarea>
          <button type="submit">{submit}</button>
        </form>
      </div>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[{ image: "/images/law24.png", speed: -30 }]}
          className={`aspect-[2/1] ${styles.banner}`}
        ></ParallaxBanner>
      </ParallaxProvider>
    </div>
  );
};

export { Consultation };
