import styles from "./index.module.css";
import logo from "../../public/images/nosratilogo.png";
import Image from "next/image";
import icon1 from "../../public/images/1.png";
import icon2 from "../../public/images/2.png";
import icon3 from "../../public/images/3.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.logo}>
            <Image
              src={logo}
              objectFit="cover"
              alt="card-image"
              layout="fill"
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p>
            Nosrati Law Group, APC, a boutique client-centered practice
            specializing in estate planning
          </p>
          <strong>Opening Hours :</strong> Monday Sat: 9am to 6pm
          <div className={styles.icons}>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div>
          <h2>CONTACT INFO</h2>
          <div>
            <div style={{ width: "30px", height: "30px" }}>
              <Image
                src={icon1}
                objectFit="cover"
                alt="card-image"
                layout="fill"
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>9777 Wilshire Blvd., Suite 400</div>
          </div>

          <div>
            <div style={{ width: "30px", height: "30px" }}>
              <Image
                src={icon1}
                objectFit="cover"
                alt="card-image"
                layout="fill"
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>Beverly Hills, CA 90212</div>
          </div>
          <div>
            <div style={{ width: "30px", height: "30px" }}>
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
            <div>310-288-9780</div>
          </div>
        </div>
        <div>
          <h2>OUR SERVICES</h2>
          <div>
            <i className="fa fa-angle-right"></i>
            Wills
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            Trust
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            Power of Attorney
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            <span style={{ fontSize: "15px", textAlign: "center" }}>
              Medical Health Care Directives <br /> &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </div>
        </div>
        {/* <div>
          <h2>NEWSLETTER</h2>
          <form action="">
            Tetur adipiscing elit, sed do eiusmod tempor in cididunt ut labore
            <input placeholder="Your Email Address" type="text" />
            <button type="submit">SUBSCRIBE NOW</button>
          </form>
        </div> */}
      </div>

      <div className={styles.copyright}>
        <div>© 2023 Nosrati Law Group. </div>
        <div>
          <ul>
            <li>
              Home <i className="fas fa-circle"></i>
            </li>
            <li>
              About <i className="fas fa-circle"></i>
            </li>
            <li>
              Services <i className="fas fa-circle"></i>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;