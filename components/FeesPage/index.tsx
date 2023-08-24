"use client";
import icon1 from "../../public/images/1.png";
import icon2 from "../../public/images/2.png";
import icon3 from "../../public/images/3.png";
import Image from "next/image";
import styles from "./index.module.css";
import "react-slideshow-image/dist/styles.css";
import { useHero } from "../../helpers/hooks/useHero";

const FeesPage = () => {
  return (
    <div className={styles.contact}>
      {useHero(
        "OUR FEES AND PRACTICE AREAS",
        "Fees",
        styles.hero,
        styles.caption,
        styles.line
      )}
      <div className={styles.content}>
        <h2>FEES & PRACTICE AREAS</h2>
        <p>
          We offer transparent and competitive open pricing for all services
          provided. Most estate planning services are offered on a flat-fee
          basis. Those matters that must be handled hourly will be billed at a
          competitive rate. The cost of an estate plan varies depending on the
          size and complexity of an estate. Please schedule a free. Packages
          inlcude:
        </p>
        {/* <h3>PACKAGES INLCUDE</h3> */}
        <div className={styles.cards}>
          <div>
            <div>
              <i className="fa-solid fa-scale-balanced"></i>
            </div>
            <div className={styles.packages}>PACKAGES</div>
            <div>Revocable Living Trust</div>
          </div>
          <div>
            <div>
              <i className="fa-solid fa-scale-balanced"></i>
            </div>
            <div className={styles.packages}>PACKAGES</div>
            <div>Wills</div>
          </div>
          <div>
            <div>
              <i className="fa-solid fa-scale-balanced"></i>
            </div>
            <div className={styles.packages}>PACKAGES</div>
            <div>Financial Powers of Attorney</div>
          </div>
          <div>
            <div>
              <i className="fa-solid fa-scale-balanced"></i>
            </div>
            <div className={styles.packages}>PACKAGES</div>
            <div>Advance Health Care Directives</div>
          </div>
          <div>
            <div>
              <i className="fa-solid fa-scale-balanced"></i>
            </div>
            <div className={styles.packages}>PACKAGES</div>
            <div>HIPPA Authorizations</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FeesPage };
