"use client";
import styles from "./index.module.css";
import Image from "next/image";
import man from "../../public/images/column-bg2.png";
import abzt from "../../public/images/headshot.png";
import shape from "../../public/images/shape-1.png";
import one1 from "../../public/images/one1.png";
import one2 from "../../public/images/one2.png";
import one3 from "../../public/images/one3.png";
import { useState, useEffect } from "react";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.cards}>
        <div>
          <div style={{ width: "60px", height: "60px" }}>
            <Image
              src={one1}
              objectFit="cover"
              alt="card-image"
              layout="fill"
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <strong>Sustainable Systems</strong>
          </div>
          <div>
            <p>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews iterative approaches to corporate.
            </p>
          </div>
        </div>

        <div>
          <div style={{ width: "60px", height: "60px" }}>
            <Image
              src={one2}
              objectFit="cover"
              alt="card-image"
              layout="fill"
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <strong>Quality Services</strong>
          </div>
          <div>
            <p>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews iterative approaches to corporate.
            </p>
          </div>
        </div>

        <div>
          <div style={{ width: "60px", height: "60px" }}>
            <Image
              src={one3}
              objectFit="cover"
              alt="card-image"
              layout="fill"
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <strong>Remodeling Experts</strong>
          </div>
          <div>
            <p>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews iterative approaches to corporate.
            </p>
          </div>
        </div>
      </div>

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
          <h4>&nbsp; &nbsp; &nbsp;WHO WE ARE??</h4>
          <h2>Story About Us</h2>
          <p>
            Nosrati Law Group, APC is a boutique client-centered practice
            specializing in estate planning. <br /> Attorney, S. Sophie Nosrati is the
            managing attorney at Nosrati Law Group, a Beverly Hills firm
            specializing in estate planning. <br /> <br /> As an experienced estate planning
            attorney with over 25 years of legal experience, Ms. Nosrati has
            helped individuals and families create meaningful and effective
            estate plans. Over the years, she has drafted estate plans for
            individuals, married couples, domestic partners, couples in
            non-traditional relationships, and families with children and
            families with special needs. <br /> <br /> Ms. Nosrati prides herself on taking a
            personal interest in every {`client’s`} story and ensures that from the
            initial client call, every {`client’s`} personal wishes and family
            dynamics are addressed. As a parent herself, she fully understands a
            {`family’s`} needs for planning for the future and is honored to assist
            clients with this most important life decision and is committed to
            helping her clients plan for their {`families’ `}future while preserving
            their legacies. <br /> <br /> When it comes to estate planning, we make an
            enduring commitment to every client to be with you every step of the
            way during this most important process in your {`family’s`} life.
            Working with you, together {`we’ll`} formulate a personalized estate
            plan that meets your {`family’s`} personal and financial needs. Whether
            you need a simple estate plan or have substantial assets to protect,
            we will personalize an estate plan that best meets your needs. Every
            estate size can benefit from a comprehensive estate plan. We deeply
            value each client and look forward to getting to know you and
            serving all your estate planning needs.
          </p>
          <div className={styles.abzt}>
            {/* <div>
              <Image
                src={abzt}
                objectFit="cover"
                alt="card-image"
                layout="fill"
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div> */}
            {/* <div>
              <div className={styles.check}>
                <div>
                  <i className="fa-solid fa-circle-check"></i>
                  &nbsp; &nbsp;Pre-construction services
                </div>
                <div>
                  <i className="fa-solid fa-circle-check"></i>
                  &nbsp;&nbsp; Industrial manufacturing
                </div>
                <div>
                  <i className="fa-solid fa-circle-check"></i>
                  &nbsp;&nbsp; Building and construction
                </div>
              </div>
            </div> */}
            <button>KNOW MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { About };
