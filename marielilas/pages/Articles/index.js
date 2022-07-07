import Head from 'next/head'
import styles from './Articles.module.css'
import { database } from "../../config/firebase"
import Link from "next/link"
import { collection, getDocs } from 'firebase/firestore'

export default function Articles(props) {
  

  return (
    <>
    <Head>
    <meta  content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Le site de la Voyante Marie Lilas</title>
    </Head>
    <section className={styles.articles}>
      <h1 className={styles.articlesTitle}><span className={styles.spanH1}>Les</span><br/>Articles</h1>
      <div className={styles.artContainer}>
        {
        
       props.myArticles.map(art => (

        <Link  className={styles.basis} href="#">
        <div style={{backgroundImage: `url("/assets/${art.image}.jpg")`, }} className={styles["card"]} >
          <div className={styles.test}>
          <div  className={styles["articlesName"]}>
          <h2 className={styles.artName}>{art.title}</h2>
            <a className={styles.artLink}>Lire l'article</a>
          </div>
          </div>
        </div> 
        </Link>

       )) 
      
}
      </div>
    </section>
    </>
  )
}

export async function getStaticProps(){
  const articles = collection(database, "articles");
    const data = await getDocs(articles)
    const myArticles = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
  
    return{
      props: {
        myArticles
      }
    }
  
    
  }