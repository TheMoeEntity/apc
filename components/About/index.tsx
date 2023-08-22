"use client";
import styles from "./index.module.css";
import Image from "next/image";
import man from "../../public/images/column-bg2.png";
import shape from "../../public/images/shape-1.png";

import { useState, useEffect } from "react";
import Link from "next/link";

const About = () => {
  return (
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
          <h4>&nbsp; &nbsp; &nbsp;WHO WE ARE??</h4>
          <h2>Story About Us</h2>
          <p>
            At Nosrati Law Group, APC, we specialize in estate planning. Led by
            attorney S. Sophie Nosrati, with 25+ years of legal experience, we
            serve Beverly Hills and beyond. Sophie helps individuals, couples,
            and families, including those with special needs. <br /> <br />
            Sophie takes a personal interest in every {`client's`} story,
            ensuring unique wishes and family dynamics are addressed. As a
            parent, she understands the importance of securing your {`family's`}{" "}
            legacy. <br /> <br />
            With a commitment to guide you through estate planning, we create
            personalized plans tailored to your {`family's`} needs. From simple
            to substantial estates, {`we're`} here to ensure your {`family's`}{" "}
            future. Learn more
          </p>
          <div className={styles.abzt}>
            <Link href="/about">
              <button>KNOW MORE</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { About };
