"use client";
import banner from "../../public/images/backgound23.jpeg";
import banner2 from "../../public/images/law2.png";
import headshot from "../../public/images/headshot.png";
import business from "../../public/images/business.jpg";
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
            src={banner2}
            layout="fill"
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className={styles.caption}>
            <div>
              <Image
                alt="Banner-img"
                objectFit="cover"
                src={headshot}
                layout="fill"
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>
              <span>Nosrati Law Group</span>
              <h1>PROFESSIONAL LAW FIRM</h1>
              <p>
                Nosrati Law Group, APC is a boutique client-centered practice
                specializing in estate planning.
              </p>
              <button>FREE CONSULTATION</button>
            </div>
          </div>
          <div className={styles.overlay}></div>
        </div>
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
            <div>
              <Image
                alt="Banner-img"
                objectFit="cover"
                src={business}
                layout="fill"
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>
              <span>Nosrati Law Group</span>
              <h1>Nosrati Law Group, APC</h1>
              <p>
                We are a leading law firm in estate planning. With more than 20
                years of experience
              </p>
              <button>FREE CONSULTATION</button>
            </div>
          </div>
          <div className={styles.overlay}></div>
        </div>
      </Fade>
    </div>
  );
};

export { Hero };
