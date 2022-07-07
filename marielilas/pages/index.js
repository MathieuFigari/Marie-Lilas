import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import marieLila from '../public/assets/marielilas.jpg';
import Link from 'next/link';


 export default function Home(props) {

  

  return (
    <>
    <Head>
    <meta  content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Le site de la Voyante Marie Lilas</title>
    </Head>
    <div className={styles.scrollContainer}>
    <section className={styles.containerPrequel}>
      <div className={styles.theTitle}>
        <h1 className={styles.titre} ><span>Marie-Lilas</span><span>Voyance</span><span>Cartomancie</span></h1>
        <h2 className={styles.subtitle}>Ne Restez plus dans l'incertitude</h2>
        </div>
    </section>
    <section className={styles.about}>
      <div className={styles.containAbout}>
      <div className={styles.aboutMe}>
        <h2 className={styles.aboutTitle}>Qui Suis-Je</h2>
        <div className={styles.aboutIntro}>Bonjour à vous! Je suis Marie-Lilas !</div>
        <div className={styles.descContain}>Quelque soit le secteur demandé, (professionnel, sentimental ou autre),  je suis là pour vous guider, vous rassurer, vous aider à faire un choix ou peut-être même,  vous redonner du baume au coeur ! Ne restez plus dans vos incertitudes ! Je suis là !</div>
        <div className={styles.descContain}>Appelez-moi !! En un coup de fil, votre vie peut prendre une autre couleur !! Et si le bout du tunnel n'était pas si loin !!!  Vous pouvez retrouver l'espoir, voire même le sourire !!  N'hésitez plus !!</div>
        <div className={styles.outro}>Je reçois aussi à domicile bien sûr !! (Surgères en Charente Maritime)</div>
        <div className={styles.seePhotos}>Voir Photos</div>
      </div>
      <div className={styles.marieLilaPhoto}>
      <Image
      src={marieLila}
      width="625" height="960"/>
      </div>
      </div>
    </section>
    <section id='scrollToContact' className={styles.contact}>
      <h2 className={styles.titleContact}>Contact</h2>
        <div className={styles.infosContact}>
          <div className={styles.adressInfos}> 
          <h3 className={styles.subtitContact}>Marie-Lilas-Voyance</h3>
            <address> 7 Rue Olivier Brillouet <br/> 17700 Surgères</address>
            <address> <p className={styles.email}>marie-lilas@hotmail.fr</p>
            <Link href="tel:+33681243124"><a>06 81 24 31 24</a></Link>
            </address>
            </div> 


        <form className={styles.formContact}>
        
    <input className={styles.inputArea} type="text" id={styles.fname} name="firstname" placeholder="Votre nom et prénom"></input>

    <input className={styles.inputArea} type="number" id={styles.phone} name="phone" placeholder="Votre Numéro de Téléphone"></input>

    <input className={styles.inputArea} id={styles.emailAddress} type="email" name="email" placeholder="Votre email" />

    <textarea className={styles.inputArea} id={styles.subject} name="subject" placeholder="Votre message" style={{height: "200px"}}></textarea>

    <input className={styles.submit} id={styles.submit} type="submit" value="Envoyer" />
  </form>
          
        </div>

    </section>
    </div>
    </>
  );
}


export async function getStaticProps(){
  const data = await import(`/data/vocabulary.json`)
  const array = data.vocabulary;


/*  if (array.length === 0){
    return {
      notFound: true
    }
  } */


  if (array.length === 0){
    return {
      redirect: {
        destination: "/isr"
      }
    }
  }

  return{
    props: {
      array
    }
  }
}

