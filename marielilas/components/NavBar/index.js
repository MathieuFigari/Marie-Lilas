import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import Image from 'next/image'
import logo from '../../public/assets/logo.png'
import { useRouter } from "next/router"


export default function NavBar() {

const router = useRouter()

  return (
    <header className={styles.header}>
      <div className={styles.siteHeader}>
    
    <nav className={styles.navbar}>
      <div className={styles.logo}>
    <Image
    src={logo}
    width="100" height="100"
    />
    </div>
    <div className={router.asPath == "/" ? styles["link_active"] :  styles["link"]}>
      <Link href="/"><a>Accueil</a></Link>
      </div>
      <div className={router.pathname == "/Articles" || router.pathname == "/Articles/[article]" ? styles["link_active"] :  styles["link"]}>
      <Link href="/Articles"><a>Articles</a></Link>
      </div>
      <div className={router.asPath == "/#scrollToContact" ? styles["link_active"] :  styles["link"]}>
      <Link href="/#scrollToContact"><a>Contact</a></Link>
      </div>
    </nav>
    </div>
    </header>
    
    
  )
}
