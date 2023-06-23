import { About } from '@/components/About'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Service'
import { Sophie } from '@/components/Sophie'
import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <About />
      <Services />
      <Sophie />
    </main>
  )
}
