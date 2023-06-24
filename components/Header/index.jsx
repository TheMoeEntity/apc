"use client";
import styles from "./index.module.css";
import logo from "../../public/images/nosratilogo.png";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [sidebar, setSideBar] = useState(false);
  const sideContent = useRef(null);
  const [sticky, setSticky] = useState("");
  const headerRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", isSticky);

    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

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
  const innerAction = () => {
    const elemHeight = inner.current.scrollHeight;
    const height = inner.current.style.maxHeight;
    inner.current.style.maxHeight =
      height === "" || height === "0px" ? `${elemHeight}px` : "0";
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
            <li onClick={showMore}>
              <span>
                <Link href={`#services`}>Services</Link>
              </span>
              <span>
                <i className="fa fa-plus"></i>
              </span>
            </li>
            <li ref={more} className={styles.more}>
              <ul>
                <li>Service Style 1</li>
                <li>Service Style 2</li>
                <li onClick={innerAction}>
                  <span>Services Style 3</span>
                  <span>
                    <i className="fa fa-plus"></i>
                  </span>
                </li>
                <ul ref={inner} className={styles.inner}>
                  <li>General Construction</li>
                  <li>Property Maintenance</li>
                  <li>Preconstruction</li>
                  <li>Virtual Design and Build</li>
                  <li>Project management</li>
                  <li>Design Build</li>
                </ul>
              </ul>
            </li>
            <li>
              <span>Pages</span>
              <span>
                <i className="fa fa-plus"></i>
              </span>
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
      <div className={`${styles.headerTwo} ${sticky}`}>
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
              <Link href={"/"}> Home + </Link>
              <div className={styles.dropdn}>
                <ul>
                  <li className={styles.multiple}>
                    Single Pages +
                    <div className={styles.mores}>
                      <ul>
                        <li>Singin Out Loud</li>
                        <li>Nothing can stop me</li>
                        <li>Service Single 3</li>
                        <li>Lorem Ipsum</li>
                        <li>Dolor SIt </li>
                        <li>Moses Pages</li>
                        <li>Sex Playlist</li>
                        <li>Bunch of words</li>
                        <li>Sia is the greatest</li>
                      </ul>
                    </div>
                  </li>
                  <li className={styles.multiple}>
                    Multiple Pages +
                    <div className={styles.mores}>
                      <ul>
                        <li>Services Style 1</li>
                        <li>Services Style 2</li>
                        <li>Service Single 3</li>
                        <li>Lorem Ipsum</li>
                        <li>Dolor SIt </li>
                        <li>Moses Pages</li>
                        <li>Sex Playlist</li>
                        <li>Bunch of words</li>
                        <li>Sia is the greatest</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link href={`#about`}>
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link href={`#services`}>Services +</Link>
              <div className={styles.dropdn}>
                <ul>
                  <li>Services Style 1</li>
                  <li>Services Style 2</li>
                  <li>Service Single</li>
                </ul>
              </div>
            </li>
            <li>
              Pages +
              <div className={styles.dropdn}>
                <ul>
                  <li className={styles.multiple}>
                    Team
                    <div className={styles.mores}>
                      <ul>
                        <li>Team Style 1</li>
                        <li>Team Style 2</li>
                        <li>Team Style 3</li>
                        <li>Team Style 4</li>
                        <li>Team Style 5 </li>
                      </ul>
                    </div>
                  </li>
                  <li>Projects</li>
                  <li>Pricing Plan</li>
                  <li>Faq</li>
                  <li>Gallery</li>
                  <li>Shop</li>
                </ul>
              </div>
            </li>
            <li>
              <Link href={"#contact"}>Contact</Link>
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
