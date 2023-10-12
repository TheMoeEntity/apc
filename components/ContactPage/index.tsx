"use client";
import styles from "./index.module.css";
import { useContact, useResize } from "../../helpers/hooks";
import { useHero } from "../../helpers/hooks/useHero";

const Contact = () => {
  const { val, setVal, textAreaRef } = useResize();
  const { submit, handlesubmit } = useContact(val);
  return (
    <div className={styles.contact}>
      {useHero("", "Contact Us", styles.hero, styles.caption, styles.line)}
      <div className={styles.maps}>
        <div>
          <div className="google-map-code">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.0775319777313!2d-118.40832329999999!3d34.0675267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbf626255555%3A0x5baf12b26c82f470!2s9777%20Wilshire%20Blvd%20Suite%20400%2C%20Beverly%20Hills%2C%20CA%2090210%2C%20USA!5e0!3m2!1sen!2sng!4v1692804334644!5m2!1sen!2sng"
              width="100%"
              height="400"
              frameBorder="0"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen={false}
              aria-hidden="false"
              tabIndex={0}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div>
          <form onSubmit={handlesubmit}>
            <div className={styles.line}></div>
            <h1>Contact Us</h1>
            <div className={styles.formGroup}>
              <input placeholder="Name" type="text" />
              <input placeholder="Email" type="text" />
            </div>
            <div className={styles.formGroup}>
              <input placeholder="Phone Number" type="number" />
              <input placeholder="Your Address" type="text" />
            </div>
            <textarea
              placeholder="Your Message Here"
              name=""
              id=""
              cols={10}
              ref={textAreaRef}
              value={val}
              onChange={(e) => setVal(e.target.value)}
            ></textarea>
            <button className={styles.btn} type="submit">
              {submit}
            </button>
          </form>
        </div>
        <div></div>
      </div>
      <div className={styles.cards}>
        <div>
          <div className={styles.icons}>
            <span>
              <i
                style={{
                  marginRight: "15px",
                }}
                className="fa-solid fa-location-dot"
              ></i>
            </span>
          </div>
          <h2>
            <strong>Office Address</strong>
          </h2>
          <div>
            <p>
              9777 Wilshire Blvd., Suite 400 <br /> Beverly Hills, CA 90212
            </p>
          </div>
        </div>
        <div>
          <div className={styles.icons}>
            <span>
              <i
                style={{
                  marginRight: "15px",
                }}
                className="fa-regular fa-message"
              ></i>
            </span>
          </div>
          <h2>
            <strong>Connect with us</strong>
          </h2>
          <div>
            <p>
              snosratilaw@gmail.com <br /> Nosratiestateplanning.com,
            </p>
          </div>
        </div>
        <div>
          <div className={styles.icons}>
            <span>
              <i
                style={{
                  marginRight: "15px",
                }}
                className="fa-solid fa-phone"
              ></i>
            </span>
          </div>
          <h2>
            <strong>Call us</strong>
          </h2>
          <div>
            <p>
              310-288-9780
              <br /> 310-288-9780
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
