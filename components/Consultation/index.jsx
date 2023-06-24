"use client";
import styles from "./index.module.css";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import { sendMail } from "@/utils/contact";
import { checkEnvironment } from "@/utils/checkEnvironment";

const Consultation = () => {
  const handlesubmit = (e) => {
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
     sendMail(data)
    // fetch(checkEnvironment().concat("/api/contact"), {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then(async (res) => {
    //     const isJson = res.headers
    //       .get("content-type")
    //       ?.includes("application/json");
    //     const data = isJson ? await res.json() : null;

    //     if (!res.ok) {
    //       const error = (data && data.message) || res.status;
    //       alert("There was an error")
    //       return Promise.reject(error);
    //     } else if (res.ok) {
    //       alert("mail sent successfully")
    //       return res.json();
    //     }
    //   })
    //   .catch((err) => {
    //     alert("There was an error 2")
    //     console.log(err);
    //   });
    e.target.reset();
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
          <button type="submit">SUBMIT NOW</button>
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
