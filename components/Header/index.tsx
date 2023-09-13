"use client";
import styles from "../../app/page.module.css";
import logo from "../../public/images/logo-option.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLinks, useSideBar, useSticky } from "../../helpers/hooks";

const Header = () => {
  const router = useRouter();
  const { sidebar, setSideBar, hide, show, sideContent } = useSideBar();
  const { links, LinkAction } = useLinks();
  const { headerRef, sticky } = useSticky(styles.isSticky);

  return (
    <div className={styles.header}>
      <div
        style={{ right: sidebar ? "0%" : "-100%" }}
        className={styles.sidebar}
      >
        <div ref={sideContent} className={styles.sidecontent}>
          <div onClick={hide} className={styles.close}>
            &times;
          </div>
          <ul>
            <li>
              <span>Home</span>
            </li>
            <li onClick={() => setSideBar(false)}>
              <Link href={`/about`}>About</Link>
            </li>
            <li onClick={() => setSideBar(false)}>
              <span>
                <Link href={`/services`}>Services</Link>
              </span>
            </li>
            <li onClick={() => setSideBar(false)}>
              <Link href={"/process"}>Process</Link>
            </li>
            <li onClick={() => setSideBar(false)}>
              <Link href={"/fees"}>Fees</Link>
            </li>
            <li onClick={() => setSideBar(false)}>
              <Link href={"/testimonials"}>Testimonials</Link>
            </li>
            <li onClick={() => setSideBar(false)}>
              <Link href={"/forms"}>Forms</Link>
            </li>
            <li onClick={() => setSideBar(false)}>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        ref={headerRef}
        style={{ display: "flex" }}
        className={styles.headerOne}
      >
        <div>
          <div>
            <i className="fa fa-phone"></i> 310-288-9780
            &nbsp;&nbsp;&nbsp;&nbsp;·
          </div>
          <div>
            <i className="fa fa-envelope"></i> 9777 Wilshire Blvd., Suite 400,
            Beverly Hills &nbsp;&nbsp;&nbsp;&nbsp;·
          </div>
        </div>

        <div>
          <div>
            <i style={{ color: "#B7A189" }} className="fa fa-clock"></i> Hours:
            Mon-Fri: 9.00 am - 7.00 pm &nbsp;&nbsp;&nbsp;&nbsp;
            <span
              onClick={() => router.push("/#contact")}
              className={styles.freeConsult}
            >
              <i className="fa-solid fa-envelope"></i> Free Consultation
            </span>
          </div>
        </div>
      </div>
      <div className={`${styles.headerTwo} ${sticky}`}>
        <div onClick={() => LinkAction("")}>
          <Image
            src={logo}
            alt="card-image"
            fill={true}
            quality={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={styles.links}>
          <ul>
            {links.map((x, i) => (
              <li
                className={x.isActive ? styles.active : ""}
                key={i}
                onClick={() => LinkAction(x.href)}
              >
                {x.name}
              </li>
            ))}
          </ul>
        </div>
        <div onClick={show} className={styles.bars}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

export { Header };
