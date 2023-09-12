import { Helpers } from "../../helpers";
import { useHero } from "../../helpers/hooks/useHero";
import styles from "./index.module.css";

const ServicePage = () => {
  return (
    <div className={styles.contact}>
      {useHero(
        "LEGAL SERVICES AND PRACTICE AREA",
        "Services",
        styles.hero,
        styles.caption,
        styles.line
      )}
      <div className={styles.content}>
        <div className={styles.grid}>
          <div>
            <div className={styles.accordion}>
              <div className={styles.first}>
                <div onClick={(e) => Helpers.accordionEffect(e)}>
                  <span>
                    <i className="fas fa-plus"></i>
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  <span>Comprehensive Estate Planning</span>
                </div>
                <div></div>
                <div>
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
                <div onClick={(e) => Helpers.accordionEffect(e)}>
                  <span>
                    <i className="fas fa-plus"></i>
                  </span>{" "}
                  &nbsp;&nbsp;&nbsp; Wills
                </div>
                <div></div>
                <div>
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
                <div onClick={(e) => Helpers.accordionEffect(e)}>
                  <span>
                    <i className="fas fa-plus"></i>
                  </span>{" "}
                  &nbsp;&nbsp;&nbsp; Trust
                </div>
                <div></div>
                <div>
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
                      Ensures proper care of minor or disabled family members by
                      the designation of a guardian for your minor chidren and
                      financial planning for disabled loved ones.
                    </li>
                    <li>
                      Provides for financial security during your incapacity
                    </li>
                    <li>
                      Avoids probate in multiple states if property is owned
                      outside of California.
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
            {/* <h2>Legal Practices Area</h2> */}
            <div className={styles.accordion}>
              <div className={styles.first}>
                <div onClick={(e) => Helpers.accordionEffect(e)}>
                  <span>
                    <i className="fas fa-plus"></i>
                  </span>{" "}
                  &nbsp;&nbsp;&nbsp; Power Of Attorney
                </div>
                <div></div>
                <div>
                  <p>
                    A Power of Attorney allows an entrusted agent selected by
                    you to act on your behalf in the event of your incapacity
                    and is essential in seamlessly administering your business
                    needs during any period of your incapacity.
                  </p>
                </div>
              </div>
              <div className={styles.first}>
                <div onClick={(e) => Helpers.accordionEffect(e)}>
                  <span>
                    <i className="fas fa-plus"></i>
                  </span>{" "}
                  &nbsp;&nbsp;&nbsp;
                  <span>Medical Health Care Directives & HIPPA Release</span>
                </div>
                <div></div>
                <div>
                  <p>
                    A Medical Health Care Directive allows an entrusted agent
                    selected by you to make important health care decisions on
                    your behalf during your incapacity. Most importantly, it
                    allows you to outline your end-of-life decisions and desires
                    for life sustaining treatments. <br /> <br />A HIPPA Release
                    authorizes your medical team to discuss your treatment and
                    condition with those you name in the Release. Otherwise,
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
