"use client";
import styles from "./index.module.css";
import "react-slideshow-image/dist/styles.css";
import { useHero } from "../../helpers/hooks/useHero";

const FormsPage = () => {
  return (
    <div className={styles.contact}>
      {useHero("", "Forms", styles.hero, styles.caption, styles.line)}
      <div className={styles.content}>
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

export { FormsPage };
