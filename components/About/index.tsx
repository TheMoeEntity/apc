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
          <div style={{ width: "40px", height: "40px" }}>
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
            <strong>The Right Estate Plan</strong>
          </div>
          <div>
            <p>
              The right estate plan can ensure that your assets are distributed
              according to your wishes, allows you to designate guardianship for
              minor children, plan for incapacity or disability, protect your
              assets, avoid costly and time-consuming probate while minimizing
              taxes. Ms. Nosrati takes personal pride in educating clients about
              the available options in both maximizing the value of their estate
              by minimizing taxes, as well as protecting their {`families'`} and
              their legacies. She deeply values each client relationship when
              creating a personalized plan for each client. Our comprehensive
              basic estate planning will include a Will, Revocable Trust, Power
              of Attorney, Advance Health Care Directives and other related
              documents. Please contact our office for a free and confidential
              consultation. We look forward to getting to know you
            </p>
          </div>
        </div>

        <div>
          <div style={{ width: "40px", height: "40px" }}>
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
            <strong>Strategic Wealth Transfer</strong>
          </div>
          <div>
            <p>
              Creating an Estate Plan is easier than you think. Every person,
              regardless of their estate size can benefit from planning ahead.  
              Planning for the future and ensuring that your wishes are carried
              out after your passing {`don’t`} have to keep you up at night. Our
              office, with its over 25 years of legal experience and planning
              for estates large and small, will be here to assist you every step
              of the way. Our personal touch and customized planning will guide
              you to find the best available options for your {`family’s`}{" "}
              personal and financial needs, in the most tax-efficient manner.  
              We work with individuals, families and business owners in helping
              them leave a meaningful and lasting legacy. In general, an Estate
              Plan can be implemented by either the use of a Will or Trust. In
              deciding which instrument is most useful to you, please keep the
              following in mind:
            </p>
          </div>
        </div>

        <div>
          <div style={{ width: "40px", height: "40px" }}>
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
            <strong>Fees and Practice Areas</strong>
          </div>
          <div>
            <p>
              We offer established and competitive open pricing for all services
              provided. No hidden costs or fees. Packages available. Please
              contact the office for a quote. Packages Include:
            </p>
            <ul>
              <li>Revocable Living Trust</li>
              <li>Wills</li>
              <li>Financial Powers of Attorney</li>
              <li>Advance Health Care Directives</li>
              <li>HIPPA Authorizations</li>
            </ul>
            <p id="about">
              Protect your estate with these Essential Estate Planning
              Documents. Our services include comprehensive Estate Planning,
              Wills and Trusts, and Business Formations (LLC. & Corporations)
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
            specializing in estate planning. <br /> Attorney, S. Sophie Nosrati
            is the managing attorney at Nosrati Law Group, a Beverly Hills firm
            specializing in estate planning. <br /> <br /> As an experienced
            estate planning attorney with over 25 years of legal experience, Ms.
            Nosrati has helped individuals and families create meaningful and
            effective estate plans. Over the years, she has drafted estate plans
            for individuals, married couples, domestic partners, couples in
            non-traditional relationships, and families with children and
            families with special needs. <br /> <br /> Ms. Nosrati prides
            herself on taking a personal interest in every {`client’s`} story
            and ensures that from the initial client call, every {`client’s`}{" "}
            personal wishes and family dynamics are addressed. As a parent
            herself, she fully understands a{`family’s`} needs for planning for
            the future and is honored to assist clients with this most important
            life decision and is committed to helping her clients plan for their{" "}
            {`families’ `}future while preserving their legacies. <br /> <br />{" "}
            When it comes to estate planning, we make an enduring commitment to
            every client to be with you every step of the way during this most
            important process in your {`family’s`} life. Working with you,
            together {`we’ll`} formulate a personalized estate plan that meets
            your {`family’s`} personal and financial needs. Whether you need a
            simple estate plan or have substantial assets to protect, we will
            personalize an estate plan that best meets your needs. Every estate
            size can benefit from a comprehensive estate plan. We deeply value
            each client and look forward to getting to know you and serving all
            your estate planning needs.
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
