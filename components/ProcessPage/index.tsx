"use client";
import styles from "./index.module.css";
import Image from "next/image";
import man from "../../public/images/shutter1.jpg";
import shape from "../../public/images/shape-1.png";
import { useHero } from "../../helpers/hooks/useHero";

const ProcessPage = () => {
  return (
    <div className={styles.contact}>
      {useHero(
        "THE ESTATE PLANNING PROCESS",
        "Process",
        styles.hero,
        styles.caption,
        styles.line
      )}
      <div className={styles.about}>
        <div className={styles.main}>
          <div className={styles.man}>
            <Image
              src={man}
              alt="card-image"
              fill={true}
              quality={100}
              priority={true}
              sizes="(max-width: 2901px) 100vw, (max-width: 2901px) 50vw, 33vw"
            />
          </div>
          <div className={styles.stuff}>
            <div className={styles.img}>
              <div>
                <Image
                  src={shape}
                  alt="card-image"
                  fill={true}
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
                    &nbsp; &nbsp;
                    <span>
                      Complete and send back the New Client Questionnaire
                    </span>
                  </div>
                  <div>
                    <i className="fa-solid fa-circle-check"></i>
                    &nbsp;&nbsp;
                    <span>
                      Initial Consultation to discuss your goals and needs. If
                      mutually agreeable, we engage in an attorney client
                      relationship.
                    </span>
                  </div>
                  <div>
                    <i className="fa-solid fa-circle-check"></i>
                    &nbsp;&nbsp;
                    <span>
                      Design Meeting: You complete your Estate Planning
                      Worksheet and provide supporting documentation.
                    </span>
                  </div>
                  <div>
                    <i className="fa-solid fa-circle-check"></i>
                    &nbsp;&nbsp;
                    <span>A draft is provided to you for review.</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-circle-check"></i>
                    &nbsp;&nbsp;
                    <span>
                      Signing Meeting. Your documents are signed and notarized.
                    </span>
                  </div>
                  <div>
                    <i className="fa-solid fa-circle-check"></i>
                    &nbsp;&nbsp;
                    <span>
                      You fund your trust by transferring assets to your trust.
                    </span>
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
