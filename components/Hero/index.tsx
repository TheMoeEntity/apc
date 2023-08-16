"use client";
import banner from "../../public/images/law2.png";
import banner2 from "../../public/images/law.jpeg";
import Image from "next/image";
import styles from "./index.module.css";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="slide-container">
      <Fade
        arrows={true}
        infinite={true}
        duration={7000}
        transitionDuration={400}
        indicators={true}
      >
        <div className={styles.hero}>
          <Image
            alt="Banner-img"
            objectFit="cover"
            src={banner}
            layout="fill"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className={styles.caption}>
            <h1>PROFESSIONAL LAW FIRM</h1>
            <span>
              Nosrati Law Group, APC is a boutique client-centered practice
              specializing in estate planning
            </span>
            <button>
              <Link href={`#contact`}>
                {" "}
                Contact now <i>&#10230;</i>
              </Link>
            </button>
          </div>
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.hero}>
          <Image
            alt="Banner-img"
            objectFit="cover"
            src={banner2}
            layout="fill"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className={styles.caption}>
            <h1 style={{ fontSize: "40px" }}>Nosrati Law Group, APC</h1>
            <span>
              We are a leading law firm in estate planning. With more than 20
              years of experience
            </span>
            <button>
              <Link href={`#contact`}>
                {" "}
                Contact now <i>&#10230;</i>
              </Link>
            </button>
          </div>
          <div className={styles.overlay}></div>
        </div>
      </Fade>
    </div>
  );
};

export { Hero };
