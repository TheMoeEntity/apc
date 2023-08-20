import { Consultation } from "../components/Consultation";
import { Hero } from "../components/Hero";
import { Process } from "../components/Process";
import { About } from "../components/About";
import styles from "./page.module.css";
import { Testimonials } from "../components/Testimonials";
import { Sophie } from "../components/Sophie/index";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      {/* <Services /> */}
      {/* <Process /> */}
      <Sophie />
      <Consultation />
      {/* <Testimonials /> */}
    </main>
  );
}
