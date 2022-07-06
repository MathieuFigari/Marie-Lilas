import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import Image from 'next/image'
import logo from '../../public/assets/logo.png'


export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.siteHeader}>
    
    <nav className={styles.navbar}>
    <Image
     
    src={logo}
    width="100" height="100"
    />
      <Link href="/"><a>Accueil</a></Link>
      <Link href="/cours"><a>Articles</a></Link>
      <Link href="/"><a>Contact</a></Link>
    </nav>
    </div>
    </header>
    
    
  )
}
