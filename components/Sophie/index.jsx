"use client";
import { useRef } from "react";
import styles from "./index.module.css";

const Sophie = () => {
  const container = useRef(null);
  const img = useRef(null);
  const accordion = (e) => {
    const height = e.target.nextSibling.nextSibling.style.maxHeight;
    const elemHeight = e.target.nextSibling.nextSibling.scrollHeight + 80;
    const children = container.current.children;

    for (const child of children) {
      child.children[2].style.maxHeight = "0";
      child.children[2].style.padding = "0 40px";
      child.children[2].style.maxHeight = "0";
      child.children[0].style.background = "#0A1849";
      child.children[0].style.color = "white";
      child.children[1].style.background = "transparent";
    }

    e.target.style.background =
      height === "" || height === "0px" ? "#B7A189" : "#0A1849";
    e.target.style.color =
      height === "" || height === "0px" ? "black" : "white";
    e.target.children[0].children[0].className =
      height === "" || height === "0px" ? "fas fa-minus" : "fas fa-plus";
    e.target.children[0].style.color =
      height === "" || height === "0px" ? "black" : "#b7a189";
    e.target.nextSibling.nextSibling.style.padding =
      height === "" || height === "0px" ? "5px 40px" : "0 40px";
    e.target.nextSibling.style.background =
      height === "" || height === "0px" ? "#F1F1F1" : "transparent";
    e.target.nextSibling.nextSibling.style.maxHeight =
      height === "" || height === "0px" ? `${elemHeight}px` : "0";
    img.current.style.transform =
      height === "" || height === "0px" ? "scale(1.12)" : "none";
  };
  return (
    <div id="team" className={styles.benefits}>
      <div>
        <div className={styles.caption}>
          <span>YOUR BENEFIT</span>
          <h2>SOPHIE NOSRATI</h2>
          <div ref={container} className={styles.accordion}>
            <div className={styles.first}>
              <div onClick={(e) => accordion(e)}>
                <span>
                  <i className="fas fa-plus"></i>
                </span>{" "}
                &nbsp;&nbsp;&nbsp; About Sophie Nosrati.
              </div>
              <div></div>
              <div style={{ fontSize: "12px" }}>
                <p>
                  {" "}
                  S. Sophie Nosrati is the managing attorney at Nosrati Law
                  Group. Ms. Nosrati prides herself on taking a personal
                  interest in every client’s story, and ensures that with the
                  initial client call, every client’s unique interests are
                  addressed. With over 25 years of legal experience, Ms. Nosrati
                  specializes in the area of estate planning for estates of
                  varying sizes.  She has helped individuals and families create
                  meaningful and effective estate plans. Over the years, she has
                  drafted estate plans for individuals, married couples,
                  domestic partners, couples in non-traditional relationships,
                  and families with children, as well as families with special
                  needs. <br />
                </p>
              </div>
            </div>
            <div className={styles.first}>
              <div onClick={(e) => accordion(e)}>
                <span>
                  <i className="fas fa-plus"></i>
                </span>{" "}
                &nbsp;&nbsp;&nbsp; Experience
              </div>
              <div></div>
              <div style={{ fontSize: "12.5px" }}>
                <p>
                  {" "}
                  Ms. Nosrati credits her early legal experience in the
                  specialized areas of real estate development and senior asset
                  management of large commercial real estate portfolios, as an
                  invaluable aspect to her understanding of the evolving estate
                  planning needs of her clients. Through a collaborative
                  approach to estate planning, involving the client(s),
                  accountants, and others, she custom drafts documents
                  specifically tailored to each client’s needs.
                </p>
              </div>
            </div>
            <div className={styles.first}>
              <div onClick={(e) => accordion(e)}>
                <span>
                  <i className="fas fa-plus"></i>
                </span>{" "}
                &nbsp;&nbsp;&nbsp; Education and Admissions
              </div>
              <div></div>
              <div style={{ fontSize: "12.5px" }}>
                <p>
                  {" "}
                  S. Sophie Nosrati received her Bachelor’s Degree from the
                  University of California, Los Angeles (Cum Laude), and her
                  Juris Doctorate degree from Southwestern School of Law,
                  graduating in the top 20% of her class. She has been an active
                  member of the California State Bar since 1997.   Ms. Nosrati
                  is admitted to the United States District Court for the
                  Central District of California, as well as the Supreme Court
                  of California. <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div ref={img}></div>
      </div>
    </div>
  );
};

export { Sophie };
