import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/blog"><a>Le Blog</a></Link>
      <Link href="/contact"><a>Contact</a></Link>
      <Link href="/"><a>Accueil</a></Link>
    </nav>
  )
}
