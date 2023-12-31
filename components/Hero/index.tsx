import banner2 from "../../public/images/shutter1_11zon.jpg";
import headshot from "../../public/images/hero-3.jpeg";
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.hero}>
      {/* <Image
        alt="Banner-img"
        src={"/images/shutter1_11zon.jpg"}
        fill={true}
        quality={100}
        priority={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      /> */}
      <div className={styles.caption}>
        <div>
          {/* <Image
            alt="Headshot"
            src={headshot}
            fill={true}
            quality={100}
            priority={true}
            sizes="(max-width: 1038px) 100vw, (max-width: 1038px) 50vw, 33vw"
          /> */}
        </div>
        <div>
          {/* <div>
            <span style={{ visibility: "hidden" }}>
              <b> NOSRATI LAW GROUP</b>
            </span>
          </div> */}
          <div>
            <h1>
              {`It's`} Never too early to plan for your {`family's `}future
            </h1>
          </div>
          <div>
            <p>
              Nosrati Law Group, APC is a boutique client-centered practice
              specializing in estate planning.
            </p>
          </div>
          <div style={{ visibility: "hidden" }}>
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
