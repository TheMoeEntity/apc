import styles from "./index.module.css";
import Image from "next/image";
import man from "../../public/images/headshot_11zon.jpeg";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.main}>
        <div className={styles.man}>
          <Image
            src={man}
            alt="family"
            fill
            quality={100}
            priority={true}
            sizes="(max-width: 6720px) 100vw, (max-width: 2901px) 50vw, 33vw"
          />
        </div>
        <div className={styles.stuff}>
          {/* <div className={styles.img}>
            <div>
              <Image
                src={shape}
                alt="card-image"
                fill={true}
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div> */}
          {/* <h4>&nbsp; &nbsp; &nbsp;WHO WE ARE??</h4> */}
          <h2>About Us</h2>
          <p>
            As an experienced estate planning attorney with over 25 years of
            legal experience, the firm’s managing member, S. Sophie Nosrati has
            helped couples, parents, single persons, and families create
            meaningful and effective estate plans with the goals of asset
            protection, honoring their wishes, and minimizing taxes as
            necessary. <br /> <br />
            The right estate plan can provide asset protection, designate a
            trusted guardian for your minor children, and secure your{" "}
            {`family’s `}
            legacy.
            <br /> <br />
            Whether you need a simple estate plan or have substantial assets to
            protect, we will personalize an estate plan that best meets your
            needs. <br /> <br />
            We look forward to serving your estate planning needs and earning
            your trust and business. Please call or email us for a free 30
            minutes confidential consultation.
          </p>
          <div className={styles.abzt}>
            <Link href="/about">
              <button>KNOW MORE</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { About };
