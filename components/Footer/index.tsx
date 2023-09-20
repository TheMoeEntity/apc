import styles from "../../app/page.module.css";
import logo from "../../public/images/logo-option3.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.logo}>
            <Image
              src={logo}
              alt="logo"
              fill={true}
              quality={100}
              priority={true}
              sizes="(max-width: 800px) 100vw, (max-width: 800px) 50vw, 33vw"
            />
          </div>
          <p>
            Nosrati Law Group, APC, a boutique client-centered practice
            specializing in estate planning
          </p>
          <strong>Business Hours :</strong> Monday Sat: 9am to 6pm
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
            <span>
              <i
                style={{
                  fontSize: "25px",
                  color: "#b7a189",
                  marginRight: "15px",
                }}
                className="fa-solid fa-location-dot"
              ></i>
            </span>
            <div>9777 Wilshire Blvd., Suite 400, Beverly Hills, CA 90212</div>
          </div>

          <div>
            <span>
              <i
                style={{
                  fontSize: "25px",
                  color: "#b7a189",
                  marginRight: "15px",
                }}
                className="fa-solid fa-phone"
              ></i>
            </span>
            <div>310-288-9780</div>
          </div>
        </div>
        <div>
          <h2>OUR SERVICES</h2>
          <div>
            <i className="fa fa-angle-right"></i>
            Comprehensive Estate Planning
          </div>
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
            <span className={styles.last} style={{ fontSize: "15px" }}>
              <span style={{ width: "10%" }}>
                <i className="fa fa-angle-right"></i>
              </span>

              <span style={{ width: "90%" }}>
                Medical Health Care Directives & HIPPA release
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <div>© 2023 Nosrati Law Group. </div>
        <div>
          <ul>
            <li>
              Home <i className="fas fa-circle"></i>
            </li>
            <li>
              <Link href="/about">About</Link>
              <i className="fas fa-circle"></i>
            </li>
            <li>
              <Link href="/services">Services</Link>{" "}
              <i className="fas fa-circle"></i>
            </li>
            <li>
              <Link href="/process">Process</Link>{" "}
              <i className="fas fa-circle"></i>
            </li>
            <li>
              <Link href="/fees">Fees</Link> <i className="fas fa-circle"></i>
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
