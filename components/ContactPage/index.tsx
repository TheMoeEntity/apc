"use client";
import Link from "next/link";
import styles from "./index.module.css";
import icon1 from "../../public/images/1.png";
import icon2 from "../../public/images/2.png";
import icon3 from "../../public/images/3.png";
import Image from "next/image";
import { useResize } from "../../helpers/hooks";

const Contact = () => {
  const { val, setVal, textAreaRef } = useResize();
  return (
    <div className={styles.contact}>
      <div className={styles.hero}>
        <div className={styles.caption}>
          <div className={styles.line}></div>
          <div>
            <h2>Contact Us</h2>
          </div>
          <div>
            <p>REACH OUT TO US</p>
          </div>
          <div className={styles.copyrights}>
            <div>
              <Link href={`/`}>Home</Link>
            </div>
            <div>
              <i className="fas fa-circle"></i>
            </div>
            <div>
              <Link href={`/contact`}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.maps}>
        <div>
          <div className="google-map-code">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.0775319777313!2d-118.40832329999999!3d34.0675267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbf626255555%3A0x5baf12b26c82f470!2s9777%20Wilshire%20Blvd%20Suite%20400%2C%20Beverly%20Hills%2C%20CA%2090210%2C%20USA!5e0!3m2!1sen!2sng!4v1692804334644!5m2!1sen!2sng"
              width="100%"
              height="480"
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
          <form action="">
            <div className={styles.line}></div>
            <h1>Get in touch</h1>
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
              SUBMIT NOW
            </button>
          </form>
        </div>
        <div></div>
      </div>
      <div className={styles.cards}>
        <div>
          <div className={styles.icons}>
            <Image
              src={icon1}
              alt="card-image"
              fill={true}
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
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
            <Image
              src={icon2}
              alt="card-image"
              fill={true}
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <h2>
            <strong>Connect with us</strong>
          </h2>
          <div>
            <p>
              Snosratilaw.com <br /> Nosratiestateplanning.com,
            </p>
          </div>
        </div>
        <div>
          <div className={styles.icons}>
            <Image
              src={icon3}
              alt="card-image"
              fill={true}
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
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
