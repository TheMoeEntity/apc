"use client";
import styles from "./index.module.css";
import Image from "next/image";
import man from "../../public/images/business.jpg";

const Testimonials = () => {
  const testimonials: { text: string; author: string }[] = [
    {
      text: "Sophie is everything my family needed in an estate planning attorney. She is knowledgeable, meticulous, and most importantly a caring person. She takes the time to get to know her clients and thoroughly explains all aspects of the estate plan. I was never embarrassed to ask a question, and she would at every turn make sure my husband and I felt comfortable with the decisions before us. It was a true pleasure to work with her and I feel confident we made the right decision from our first phone conversation.",
      author: "K.H.",
    },
    {
      text: "Sophie is incredibly personable, highly professional, and knowledgeable. We appreciate how she always provided us with personal attention throughout the process. She is organized and the ultimate professional. We always felt we were in good hands during a difficult process.",
      author: "D.N.",
    },
    {
      text: "I reached out to my close family friend and attorney looking for a referral to assist me with the review of my Family's Trust. Sophie was his immediate response as they are fellow attys and office neighbors and what ablessing that turned out to be. She e-mailed me to introduce herself and I immediately called her (you can hear her smile in her voice) and she asked how she could help. This was difficult as I was sharing some very personal information with someone I really didn't know but she made me feel comfortable so I provided her the information she needed to review our trust, she acknowledged it's receipt and provided me a complete review within a few days. She answered all my questions, provided me with a few items to look into and made a few suggestions for the family to discuss to eliminate any possible confusion in the future. She also provided me with answers to some questions I didn't know I should have asked. As I mentioned earlier these things can be difficult no matter how much you know or don't know or think you know! Sophie will do an outstanding job helping you navigate the entire Estate Planning process providing answers to all your questions and then some...Thanks Again Sophie",
      author: "D.M.",
    },
  ];
  return (
    <div className={styles.testimonials}>
      <h2>
        <span>What Our Clients</span> Say About Our Services
      </h2>
      <div className={styles.grid}>
        <div>
          <Image
            src={man}
            objectFit="cover"
            alt="testimonial-person"
            layout="fill"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div>
          <div className={styles.arrow}>
            <i className="fa-solid fa-caret-left"></i>
          </div>
          <div className={styles.quotes}>
            <i className="fa-solid fa-quote-right"></i>
          </div>
          <p>{testimonials[0].text}</p>

          <div>
            <span>{testimonials[0].author}</span>
          </div>
        </div>
        <div>
          <Image
            src={man}
            objectFit="cover"
            alt="testimonial-person"
            layout="fill"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div>
          <div className={styles.arrow}>
            <i className="fa-solid fa-caret-left"></i>
          </div>
          <div className={styles.quotes}>
            <i className="fa-solid fa-quote-right"></i>
          </div>
          <p>{testimonials[1].text}</p>

          <div>
            <span>{testimonials[1].author}</span>
          </div>
        </div>

        <div>
          <Image
            src={man}
            objectFit="cover"
            alt="testimonial-person"
            layout="fill"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div>
          <div className={styles.arrow}>
            <i className="fa-solid fa-caret-left"></i>
          </div>
          <div className={styles.quotes}>
            <i className="fa-solid fa-quote-right"></i>
          </div>
          <p>{testimonials[2].text}</p>

          <div>
            <span>{testimonials[2].author}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Testimonials };
