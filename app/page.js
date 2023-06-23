import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
    </main>
  )
}
