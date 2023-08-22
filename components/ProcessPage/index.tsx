"use client";
import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import man from "../../public/images/business.jpg";
import shape from "../../public/images/shape-1.png";

const ProcessPage = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.hero}>
        <div className={styles.caption}>
          <div className={styles.line}></div>
          <div>
            <h2>Process</h2>
          </div>
          <div>
            <p>THE ESTATE PLANNING PROCESS</p>
          </div>
          <div className={styles.copyrights}>
            <div>
              <Link href={`/`}>Home</Link>
            </div>
            <div>
              <i className="fas fa-circle"></i>
            </div>
            <div>
              <Link href={`/contact`}>Process</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.main}>
          <div className={styles.man}>
            <Image
              src={man}
              objectFit="cover"
              alt="card-image"
              layout="fill"
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={styles.stuff}>
            <div className={styles.img}>
              <div>
                <Image
                  src={shape}
                  objectFit="cover"
                  alt="card-image"
                  layout="fill"
                  quality={100}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            <h4>&nbsp; &nbsp; &nbsp;ESTATE PLANNING PROCESS</h4>
            <h2>The Process</h2>
            <p>
              The typical estate planning process will include two in-person
              meetings from introduction to a completed estate plan. Some
              clients might need additional time together to better understand
              their options. I will be available by phone and email while
              drafting your documents to make sure you have a full understanding
              of your documents. <br /> <br />
              For the average estate plan, a draft of your documents will be
              sent to you within approximately 3 weeks of receiving your
              completed Estate Planning Worksheet and supporting documentation.
              Should you need your documents in a rush manner for reasons such
              as a medical procedure or travel, please inform me immediately and
              I will do my best to meet your timeline.
              <br /> <br />
              What should you do to prepare? You don’t need to do anything to
              prepare for our initial meeting other than to fill out the New
              Client Questionnaire. I will guide you through the process of
              developing your estate plan and together will carefully consider
              all options available to you.
            </p>
            <div className={styles.abzt}>
              <div>
                <div className={styles.check}>
                  <div>
                    <i className="fa-solid fa-circle-check"></i>
                    &nbsp; &nbsp;Complete and send back the New Client
                    Questionnaire
                  </div>
                  <div>
                    <i className="fa-solid fa-circle-check"></i>
                    &nbsp;&nbsp;Initial Consultation to discuss your goals and
                    needs. If mutually agreeable, we engage in an attorney
                    client relationship.
                  </div>
                  <div>
                    <i className="fa-solid fa-circle-check"></i>
                    &nbsp;&nbsp;Design Meeting: You complete your Estate
                    Planning Worksheet and provide supporting documentation.
                  </div>
                  <div>
                    <i className="fa-solid fa-circle-check"></i>
                    &nbsp;&nbsp;A draft is provided to you for review.
                  </div>
                  <div>
                    <i className="fa-solid fa-circle-check"></i>
                    &nbsp;&nbsp;Signing Meeting. Your documents are signed and
                    notarized.
                  </div>
                  <div>
                    <i className="fa-solid fa-circle-check"></i>
                    &nbsp;&nbsp;You fund your trust by transferring assets to
                    your trust.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;