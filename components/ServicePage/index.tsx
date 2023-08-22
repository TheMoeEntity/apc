"use client";
import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import { MouseEvent, useRef } from "react";

const ServicePage = () => {
  const container = useRef(null);
  const img = useRef(null);
  const accordion = (e: MouseEvent<HTMLDivElement>) => {
    const event = e.target as HTMLElement;
    const height = (
      (e.target as HTMLElement).nextSibling.nextSibling as HTMLElement
    ).style.maxHeight;
    const elemHeight =
      ((e.target as HTMLElement).nextSibling.nextSibling as HTMLElement)
        .scrollHeight + 80;
    const children = container.current.children;

    for (const child of children) {
      child.children[2].style.maxHeight = "0";
      child.children[2].style.padding = "0 40px";
      child.children[2].style.maxHeight = "0";
      child.children[0].style.background = "#0A1849";
      child.children[0].style.color = "white";
      child.children[1].style.background = "transparent";
    }

    event.style.background =
      height === "" || height === "0px" ? "#B7A189" : "#0A1849";
    event.style.color = height === "" || height === "0px" ? "black" : "white";
    event.children[0].children[0].className =
      height === "" || height === "0px" ? "fas fa-minus" : "fas fa-plus";
    (event.children[0] as HTMLElement).style.color =
      height === "" || height === "0px" ? "black" : "#b7a189";
    (event.nextSibling.nextSibling as HTMLElement).style.padding =
      height === "" || height === "0px" ? "5px 40px" : "0 40px";
    (event.nextSibling as HTMLElement).style.background =
      height === "" || height === "0px" ? "#F1F1F1" : "transparent";
    (event.nextSibling.nextSibling as HTMLElement).style.maxHeight =
      height === "" || height === "0px" ? `${elemHeight}px` : "0";
  };
  return (
    <div className={styles.contact}>
      <div className={styles.hero}>
        <div className={styles.caption}>
          <div className={styles.line}></div>
          <div>
            <h2> Services</h2>
          </div>
          <div>
            <p>OUR SERVICES AND LEGAL PRACTICE AREA</p>
          </div>
          <div className={styles.copyrights}>
            <div>
              <Link href={`/`}>Home</Link>
            </div>
            <div>
              <i className="fas fa-circle"></i>
            </div>
            <div>
              <Link href={`/contact`}>Services</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.grid}>
          <div>
            <h2>What We Are Expert At</h2>
            <div ref={container} className={styles.accordion}>
              <div className={styles.first}>
                <div onClick={(e) => accordion(e)}>
                  <span>
                    <i className="fas fa-plus"></i>
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  <span>Comprehensive Estate Planning</span>
                </div>
                <div></div>
                <div style={{ fontSize: "12px" }}>
                  <p>
                    A well-drafted and complete estate plan will ensure that
                    your family and assets are protected should something happen
                    to you. <br /> <br />
                    The right estate plan can ensure that your assets are
                    distributed according to your wishes, allows you to
                    designate guardianship for minor children, plan for
                    incapacity or disability, protect your assets, and avoid
                    costly and time-consuming probate while minimizing taxes.
                    The right estate planning technique used during your
                    lifetime may also enable you to pass property to your
                    intended beneficiaries in the most tax-efficient manner.{" "}
                    <br /> <br />
                    In your estate plan, you designate who will make financial
                    and medical decisions for you upon your incapacity or death.
                    Of significant importance, if you have minor children, your
                    estate plan helps you designate a trusted guardian for your
                    children until they are adults. <br /> <br />
                    <b>WHO NEEDS A CUSTOMIZED ESTATE PLAN?</b> <br /> <br />
                    Anyone who has minor children, owns real estate, or owns a
                    business, or has assets over $150,000 should have a
                    comprehensive estate plan. If you don’t have an estate plan,
                    and pass away with over $150,000 in assets, all of your
                    assets will go through an expensive, time consuming and
                    public probate procedure.
                  </p>
                </div>
              </div>
              <div className={styles.first}>
                <div onClick={(e) => accordion(e)}>
                  <span>
                    <i className="fas fa-plus"></i>
                  </span>{" "}
                  &nbsp;&nbsp;&nbsp; Wills
                </div>
                <div></div>
                <div style={{ fontSize: "12.5px" }}>
                  <p>
                    Drafting a valid will is simple, cost effective and has only
                    a few requirements. However, most Wills need to be probated.
                    Probate entails a timely and costly Court supervised
                    proceeding to oversee a person’s estate after death. With a
                    Probate proceeding, the contents of the will won’t be kept
                    private. A typical probate takes a year or longer, depending
                    on the backlog of the Court. Additionally, the fees and
                    costs associated with a probate hearing are according to a
                    strict statutory sliding scale in California ranging from
                    $4,000 to more than $188,000 depending on the size of the
                    Estate. Probate fees and costs can be avoided with the
                    proper trust instrument.
                  </p>
                </div>
              </div>
              <div className={styles.first}>
                <div onClick={(e) => accordion(e)}>
                  <span>
                    <i className="fas fa-plus"></i>
                  </span>{" "}
                  &nbsp;&nbsp;&nbsp; Trust
                </div>
                <div></div>
                <div style={{ fontSize: "12.5px" }}>
                  <p>
                    A trust is a document that allows a third party, your
                    trustee, selected by you to make decision with respect to
                    your assets in the event of your incapacity or death. The
                    trust allows you to designate who makes decisions on your
                    behalf and how they are made. A trust most importantly,
                    allows you to avoid probate. Setting up a Trust requires
                    additional paperwork and accounting. However, unlike with
                    the use of a Will, a Trust provides more privacy for one’s
                    financial affairs at time of death and avoids or likely
                    avoids probate and its related costs and expenses. Other
                    primary benefits of using a Trust include the following:{" "}
                    <br /> <br />
                  </p>
                  <ul>
                    <li>
                      Provides confidentiality and privacy to your
                      beneficiaries.
                    </li>
                    <li>
                      Designates who will make decisions for you in the event of
                      your incapacity.
                    </li>
                    <li>
                      Ensures proper care of minor or disables family members by
                      the designation of a guardian for your minor chidren and
                      financial planning for disabled loved ones.
                    </li>
                    <li>
                      Provides for financial security during your incapacity
                    </li>
                    <li>
                      Avoids probate in multiple states if property is owned
                      outside of California;
                    </li>
                    <li>
                      Encourages responsible behavior by future generations when
                      they receive an inheritance; and
                    </li>
                    <li>
                      Minimizes estate taxes and provides tax planning
                      advantages for married couples.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>Legal Practices Area</h2>
            <div ref={container} className={styles.accordion}>
              <div className={styles.first}>
                <div onClick={(e) => accordion(e)}>
                  <span>
                    <i className="fas fa-plus"></i>
                  </span>{" "}
                  &nbsp;&nbsp;&nbsp; Power Of Attorney
                </div>
                <div></div>
                <div style={{ fontSize: "12px" }}>
                  <p>
                    A Power of Attorney allows an entrusted agent selected by
                    you to act on your behalf in the event of your incapacity
                    and is essential in seamlessly administering your business
                    needs during any period of your incapacity.
                  </p>
                </div>
              </div>
              <div className={styles.first}>
                <div onClick={(e) => accordion(e)}>
                  <span>
                    <i className="fas fa-plus"></i>
                  </span>{" "}
                  &nbsp;&nbsp;&nbsp;
                  <span>Medical Health Care Direcives & HIPPA Release</span>
                </div>
                <div></div>
                <div style={{ fontSize: "12.5px" }}>
                  <p>
                    A Medical Health Care Directive allows an entrusted agent
                    selected by you to make important health care decisions on
                    your behalf during your incapacity. Most importantly, it
                    allows you to outline your end-of-life decisions and desires
                    for life sustaining treatments. <br /> <br />A HIPPA release
                    authorizes your medical team to discuss your treatment and
                    condition with those you name in the release. Otherwise,
                    under California law, those rendering medical treatment to
                    you will be prevented from releasing your medical
                    information and updates to your loved ones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
