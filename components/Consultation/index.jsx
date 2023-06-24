"use client";
import styles from "./index.module.css";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useState } from "react";

const Consultation = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [submit,setSubmit] = useState('SUBMIT NOW')
  const handlesubmit = async (e) => {
    setSubmit("Sending message....")
    e.preventDefault();
    const data = {
      firstName: e.target[0].value,
      address: e.target[2].value,
      email: e.target[3].value,
      phone: e.target[1].value,
      message:
        "Hello Mr Syks, This is the message from the site: " +
        e.target[4].value,
    };

    try {
      const url = "/api/contact";
      const res = await axios.post(url, data);

      res.status === 200 &&
        enqueueSnackbar("Message successfully sent", {
          variant: "success",
        });
      console.log(res.status);
      console.log(res);
      setTimeout(() => {
        e.target.reset();
      }, 3000);
    } catch (error) {
      enqueueSnackbar(
        "There was an error sending message, try again: " + error,
        {
          variant: "error",
        }
      );
      console.log(error);
    }
    setSubmit("SUBMIT NOW")
  };

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
        <form onSubmit={handlesubmit}>
          <div className={styles.formGroup}>
            <input type="text" placeholder="Name*" />
            <input type="text" placeholder="Phone*" />
          </div>
          <div className={styles.formGroup}>
            <input type="text" placeholder="Address*" />
            <input type="text" placeholder="Email*" />
          </div>
          <textarea placeholder="Message*" name=""></textarea>
          <button type="submit">{submit}</button>
        </form>
      </div>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[{ image: "/images/law2.png", speed: -30 }]}
          className={`aspect-[2/1] ${styles.banner}`}
          id="contact"
        ></ParallaxBanner>
      </ParallaxProvider>
    </div>
  );
};

export { Consultation };
