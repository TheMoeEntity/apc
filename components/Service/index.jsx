"use client";
import styles from "./index.module.css";
import Image from "next/image";
import worker from "../../public/images/servic-1.jpeg";
import worker2 from "../../public/images/servic-2.jpeg";
import worker3 from "../../public/images/servic-3.jpeg";
import worker4 from "../../public/images/servic-4.jpeg";
import worker5 from "../../public/images/servic-5.jpeg";
import worker6 from "../../public/images/servic-6.jpeg";
import icon from "../../public/images/service-icon1.png";
import icon3 from "../../public/images/icon-5.png";
import { useEffect, useRef } from "react";

const Services = () => {
  const assets = [
    {
      img: worker,
      title: "General Construction",
      top: "WILLS",
      detail:
        "Drafting a valid will is simple, cost effective and has only a few requirements. However, most Wills need to be probated. Probate entails a timely and costly Court supervised proceeding to oversee a person’s estate after deat",
    },
    {
      img: worker2,
      title: "Proper Maintenance",
      top: "TRUST",
      detail:
        "Setting up a Trust requires additional paperwork and accounting. However, unlike with the use of a Will, a Trust provides more privacy for one’s financial affairs at time of death and avoids or likely avoids probate and its related costs and expenses. Other primary benefits of using a Trust include the following",
    },
    {
      img: worker3,
      title: "Project Management",
      top: "POWER OF ATTORNEY",
      detail:
        "A Power of Attorney allows an entrusted agent selected by you to act on your behalf in the event of your incapacity and is essential in seamlessly administering your business needs during any period of your incapacity",
    },
    {
      img: worker4,
      title: "Virtual design & build",
      top: "MEDICAL HEALTH CARE DIRECTIVES",
      detail:
        "A Medical Health Care Directive allows an entrusted agent selected by you to make important health care decisions on your behalf during your incapacity. Most importantly, it allows you to outline your end-of-life decisions and desires for life sustaining treatments",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", animateIn);
    return () => {
      window.removeEventListener("scroll", animateIn);
    };
  }, []);

  const container = useRef(null);
  const grid = useRef(null);

  const animateIn = () => {
    let width = container.current;
    let height = window.innerHeight;
    let revealpoint = 120;
    let revealTop = width.getBoundingClientRect().top;
    if (revealTop < height - revealpoint) {
      width.classList.add(styles.addWidth);
    }

    let widths = grid.current.children;

    for (const child of widths) {
      let revealTop = child.getBoundingClientRect().top;
      let revealpoint = 120;

      if (revealTop < height - revealpoint) {
        child.classList.add(styles.addWidth);
      } else {
        child.classList.remove(styles.addWidth);
      }
    }
  };
  return (
    <div className={styles.products}>
      <div ref={container} className={styles.caption}>
        <b>WHAT WE ARE EXPERT AT</b>
        <h2>
          Legal Pr<span>acti</span>ces Area
        </h2>
      </div>
      <div ref={grid} className={styles.grid}>
        {assets.map((x, i) =>  (
          <div key={i}>
            <div className={styles.overlay}>
              <div>READ MORE</div>
            </div>
            <div className={styles.topIcon}>
              <Image
                src={icon3}
                objectFit="cover"
                alt="card-image"
                layout="fill"
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>
              <h4>{x.top}</h4>
            </div>
            <div className={styles.detail}>
            {x.detail}
            </div>
            <div className={styles.learn}>
                LEARN MORE  <i>&#10230;</i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Services };
