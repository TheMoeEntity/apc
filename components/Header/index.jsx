"use client";
import styles from "./index.module.css";
import logo from "../../public/images/nosratilogo.png";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter()
  const [sidebar, setSideBar] = useState(false);
  const sideContent = useRef(null);
  const [sticky, setSticky] = useState("");
  const [hideSticky, setHideSticky] = useState("");
  const headerRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", isSticky);

    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  // useEffect(() => {
  //   if (hideSticky === styles.isHideSticky) {
  //     setTimeout(() => {
  //       window.addEventListener("scroll", removSticky);
  //     }, 800);
  //   }

  //   return () => {
  //     window.removeEventListener("scroll", removSticky);
  //   };

  // }, [hideSticky])
  
  const removSticky =()=> {
    setHideSticky('')
  }

  const isSticky = () => {
    const scrollTop = window.scrollY;
    let number = headerRef.current.style.display === "" ? 120 : 175;
    const stickyClass = scrollTop >= number ? styles.isSticky : "";
    setSticky(stickyClass);
  };

  const show = () => {
    setSideBar(true);
    setTimeout(() => {
      sideContent.current.style.width = "70%";
      sideContent.current.style.visibility = "visible";
    }, 700);
  };

  const hide = () => {
    setSideBar(false);
    setTimeout(() => {
      sideContent.current.style.width = "0%";
      sideContent.current.style.visibility = "hidden";
    }, 400);
  };

  const more = useRef(null);
  const inner = useRef(null);
  const showMore = () => {
    const elemHeight = more.current.scrollHeight;
    const height = more.current.style.maxHeight;
    more.current.style.maxHeight =
      height === "" || height === "0px" ? `${elemHeight}px` : "0";
  };
  const LinkAction = page => {
    router.push(`/#${page}`)
    // setTimeout(() => {
    //   setHideSticky(styles.isHideSticky)
    // }, 900);
  };

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
              <Link href={`#about`}>About</Link>
            </li>
            <li onClick={() => setSideBar(false)}>
              <span>
                <Link href={`#services`}>Services</Link>
              </span>
            </li>
            <li onClick={() => setSideBar(false)}>
              <Link href={"#team"}>Team</Link>
            </li>
            <li onClick={() => setSideBar(false)}>
              <Link href={"#contact"}>Contact</Link>
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
            &nbsp;&nbsp;&nbsp;&nbsp;|
          </div>
          <div>
            <i className="fa fa-envelope"></i> 9777 Wilshire Blvd., Suite 400
            &nbsp;&nbsp;&nbsp;&nbsp;|
          </div>
        </div>

        <div>
          <div>
            <i style={{ color: "#B7A189" }} className="fa fa-clock"></i> Hours:
            Mon-Fri: 9.00 am - 7.00 pm &nbsp;&nbsp;&nbsp;&nbsp;|
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>
      <div className={`${styles.headerTwo} ${sticky} ${hideSticky}`}>
        <div>
          <Link href={`/`}>
            <Image
              src={logo}
              objectFit="cover"
              alt="card-image"
              layout="fill"
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <Link href={"/"}>
                Home
              </Link>
            </li>
            <li onClick={()=> LinkAction('about')}>
                About
            </li>
            <li onClick={() => LinkAction('services')}>
              Services
            </li>
            <li onClick={()=> LinkAction('team')}>
              Team
            </li>
            <li onClick={() => LinkAction('contact')}>
              Contact
            </li>
          </ul>
        </div>
        <div className={styles.search}>
          <div>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div>{`LETS`} TALK</div>
        </div>
        <div onClick={show} className={styles.bars}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

export { Header };
