"use client";
import banner from "../../public/images/backgound23.jpeg";
import banner2 from "../../public/images/law2.png";
import headshot from "../../public/images/headshot.png";
import firm from "../../public/images/lawfirm.webp";
import Image from "next/image";
import styles from "./index.module.css";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import Link from "next/link";

const TestimonialPage = () => {
  const testimonials: { text: string; author: string }[] = [
    {
      text: "I reached out to my close family friend and attorney looking for a referral to assist me with the review of my Family's Trust. Sophie was his immediate response as they are fellow attys and office neighbors and what ablessing that turned out to be. She e-mailed me to introduce herself and I immediately called her (you can hear her smile in her voice) and she asked how she could help. This was difficult as I was sharing some very personal information with someone I really didn't know but she made me feel comfortable so I provided her the information she needed to review our trust, she acknowledged it's receipt and provided me a complete review within a few days. She answered all my questions, provided me with a few items to look into and made a few suggestions for the family to discuss to eliminate any possible confusion in the future. She also provided me with answers to some questions I didn't know I should have asked. As I mentioned earlier these things can be difficult no matter how much you know or don't know or think you know! Sophie will do an outstanding job helping you navigate the entire Estate Planning process providing answers to all your questions and then some...Thanks Again Sophie",
      author: "D.M.",
    },
    {
      text: "Sophie is everything my family needed in an estate planning attorney. She is knowledgeable, meticulous, and most importantly a caring person. She takes the time to get to know her clients and thoroughly explains all aspects of the estate plan. I was never embarrassed to ask a question, and she would at every turn make sure my husband and I felt comfortable with the decisions before us. It was a true pleasure to work with her and I feel confident we made the right decision from our first phone conversation.",
      author: "K.H.",
    },
    {
      text: "Sophie is incredibly personable, highly professional, and knowledgeable. We appreciate how she always provided us with personal attention throughout the process. She is organized and the ultimate professional. We always felt we were in good hands during a difficult process.",
      author: "D.N.",
    },
  ];
  return (
    <div className={styles.contact}>
      <div className={styles.hero}>
        <div className={styles.caption}>
          <div className={styles.line}></div>
          <div>
            <h2>Testimonials</h2>
          </div>
          <div>
            <p>WHAT OUR CLIENTS THINK</p>
          </div>
          <div className={styles.copyrights}>
            <div>
              <Link href={`/`}>Home</Link>
            </div>
            <div>
              <i className="fas fa-circle"></i>
            </div>
            <div>
              <Link href={`/contact`}>Testimonials</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h2>Client Testimonials: Our Trusted Estate Planning Services</h2>
        <div className={styles.grid}>
          {testimonials.map((x, i) => (
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
                    objectFit="cover"
                    alt="card-image"
                    fill
                    quality={100}
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.author}>
                  <div>
                    <b>{x.author}</b>
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
