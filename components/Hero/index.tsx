"use client";
import banner2 from "../../public/images/law2.png";
import headshot from "../../public/images/headshot.png";
import Image from "next/image";
import styles from "./index.module.css";
import "react-slideshow-image/dist/styles.css";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image
        alt="Banner-img"
        src={banner2}
        fill={true}
        quality={100}
        priority={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className={styles.caption}>
        <div>
          <Image
            alt="Headshot"
            src={headshot}
            fill={true}
            quality={100}
            priority={true}
            sizes="(max-width: 1038px) 100vw, (max-width: 1038px) 50vw, 33vw"
          />
        </div>
        <div>
          <div>
            <span>
              <b> NOSRATI LAW GROUP</b>
            </span>
          </div>
          <div>
            <h1>PROFESSIONAL LAW FIRM</h1>
          </div>
          <div>
            <p>
              Nosrati Law Group, APC is a boutique client-centered practice
              specializing in estate planning.
            </p>
          </div>
          <div>
            <Link href="/#contact">
              <button>FREE CONSULTATION</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
};

export { Hero };
