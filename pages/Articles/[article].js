import styles from './Articles.module.css'
import Head from 'next/head'
import { v4 as uuidv4 } from 'uuid'
import { database } from "../../config/firebase"
import { collection, getDocs } from 'firebase/firestore'
import Spinner from "../../components/Spinner"



export default function article(props) {


  return (
    <>
      {

        !props.currentArticle  ? <Spinner /> :


<>
    <Head>
    <meta  content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Marie-Lilas {props.currentArticle.title}</title>
    </Head>
    <div style={{backgroundImage: `url("/assets/${props.currentArticle.image}.jpg")`}} className={styles.articleHeader}>
      <div className={styles.transparence}>
        <h1 className={styles.subtitleArt}>{props.currentArticle.subtitle}</h1>
      </div>
    </div>
    <div className={styles.articleDescription}>
        {
          props.currentArticle.paraphs.map(paraph => (
            <p key={uuidv4()} >{paraph}</p>
          ))
        }
    </div>
    </>
      }

    </>
  )
}


export async function getStaticProps(context){

    const myArticle = context.params.article;
    const articles = collection(database, "articles");
    const data = await getDocs(articles);
    const myArticles = data.docs.map((doc) => ({...doc.data(), id: doc.id}))


    

    const currentArticle = myArticles.find(article => article.title.split(' ').join('') === myArticle)

    

    return{
        props: {
            currentArticle: currentArticle
        }
    }
}


export async function getStaticPaths(){
  const articles = collection(database, "articles");
  const data = await getDocs(articles);
  const myArticles = data.docs.map((doc) => ({...doc.data(), id: doc.id}))

    const paths = myArticles.map(article => ({
        params: {article: article.title.split(' ').join('')}
    }))

    return {
        paths,
        fallback: false
    }
}
