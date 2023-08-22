"use client";
import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import firm from "../../public/images/lawfirm.webp";
import shape from "../../public/images/shape-1.png";

const AboutPage = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.hero}>
        <div className={styles.caption}>
          <div className={styles.line}></div>
          <div>
            <h2>About Us</h2>
          </div>
          <div>
            <p>STORY ABOUT NOSRATI GROUP</p>
          </div>
          <div className={styles.copyrights}>
            <div>
              <Link href={`/`}>Home</Link>
            </div>
            <div>
              <i className="fas fa-circle"></i>
            </div>
            <div>
              <Link href={`/contact`}>About</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.main}>
          <div className={styles.man}>
            <Image
              src={firm}
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
            <h4>&nbsp; &nbsp; &nbsp;STORY ABOUT NOSRATI LAW GROUP</h4>
            <h2>About Us</h2>
            <p>
              Nosrati Law Group, APC is a Beverly Hills based client-centered
              practice specializing in estate planning. As an experienced estate
              planning attorney with over 25 years of legal experience, the
              firm’s managing member, S. Sophie Nosrati has helped parents,
              couples, single persons, and families create meaningful and
              effective estate plans with the goals of asset protection,
              honoring their wishes, and minimizing taxes as necessary. <br />{" "}
              <br /> As a parent herself, she fully understands a family’s needs
              for planning for the future and is honored to assist clients with
              this most important life decision with discretion and compassion.
              When it comes to estate planning, we make an enduring commitment
              to every client to be with you every step of the way during this
              most important process in your family’s life. Working with you,
              our office will formulate and draft a personalized estate plan
              that meets your family’s personal and financial needs. Whether you
              need a simple estate plan or have substantial assets to protect,
              we will personalize an estate plan that best meets your needs.{" "}
              <br /> <br /> We look forward to serving your estate planning
              needs and earning your trust and business. Please call or email us
              for a free one-hour confidential consultation. <br /> <br />
            </p>
          </div>
        </div>
        <div className={styles.aboutSophie}>
          <div>
            <h3>S. SOPHIE NOSRATI</h3>
            <div></div>
          </div>

          <div>
            <p>
              As the managing member of Nosrati Law Group, I pride myself in
              taking a personal interest in every client’s family dynamic and
              story. As an attorney and mother, I believe it’s essential for
              every person regardless of estate size to have an estate plan.
              Parents, married couples, single persons, couples in
              non-traditional relationships, families with children, as well as
              families with special needs all need an estate plan to distribute
              their assets as they wish, designate a trusted guardian for their
              minor children, and plan for times of incapacity or disability.{" "}
              <br /> <br />I specialize in developing a complete and
              comprehensive estate plan for every client that includes a will,
              trust, powers of attorney, and advance health care directives for
              estates of varying sizes. <br /> <br />I take personal pride in
              educating clients about the available options in both maximizing
              the value of their estate by minimizing taxes, as well as
              protecting their {`families'`} legacies. <br /> <br />I credit my
              early legal experience in the specialized areas of real estate
              development and senior asset management of large commercial real
              estate portfolios, as an invaluable aspect to my understanding of
              the evolving estate planning needs of my clients, including those
              with higher net worth and real estate portfolios. Through a
              collaborative approach to estate planning, involving the
              client(s), accountants, and others, I will custom draft documents
              specifically tailored to each client’s needs. I am committed to
              preserving your legacy.
            </p>
          </div>
        </div>

        <div className={styles.aboutSophie}>
          <div>
            <h3>EDUCATION & ADMISSIONS</h3>
            <div></div>
          </div>

          <div>
            <p>
              S. Sophie Nosrati received her Bachelor’s Degree from the
              University of California, Los Angeles (Cum Laude), and her Juris
              Doctorate degree from Southwestern School of Law, graduating in
              the top 20% of her class. She has been an active member of the
              California State Bar since 1997. <br />
              <br />
              Ms. Nosrati is admitted to the United States District Court for
              the Central District of California, as well as the Supreme Court
              of California. <br /> <br />
              Ms. Nosrati makes regular presentations about the importance of
              having an estate plan in place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
