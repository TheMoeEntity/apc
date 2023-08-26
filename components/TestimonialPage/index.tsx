"use client";
import firm from "../../public/images/family.jpg";
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import { Helpers } from "../../helpers";
import { useHero } from "../../helpers/hooks/useHero";

const TestimonialPage = () => {
  return (
    <div className={styles.contact}>
      {useHero(
        "WHAT OUR CUSTOMERS THINK",
        "Testimonials",
        styles.hero,
        styles.caption,
        styles.line
      )}
      <div className={styles.content}>
        <h2>Client Testimonials: Our Trusted Estate Planning Services</h2>
        <div className={styles.grid}>
          {Helpers.testimonials.map((x, i) => (
            <div key={i}>
              <div>
                <div className={styles.quotes}>
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <div>
                  <p>{x.text} </p>{" "}
                  <div className={styles.quoteRight}>
                    <i className="fa-solid fa-quote-right"></i>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.profile}>
                  <Image
                    src={firm}
                    alt="card-image"
                    fill
                    quality={100}
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.author}>
                  <div>
                    <b>- {x.author}</b>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { TestimonialPage };
