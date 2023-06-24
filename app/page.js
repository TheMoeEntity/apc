import { About } from '@/components/About'
import { Consultation } from '@/components/Consultation'
import Footer from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Service'
import { Sophie } from '@/components/Sophie'
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Services />
      <Sophie />
      <Consultation />
    </main>
  )
}
