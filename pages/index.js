import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import marieLila from '../public/assets/marielilas.jpg';
import Link from 'next/link';
import Slider from "../components/Slider"
import React, { useState } from 'react';
import emailjs from "@emailjs/browser"
import Script from 'next/script';



 export default function Home(props) {
  
 
const reviews = props.reviews.result.reviews
const reviewOne = reviews[0] 
const reviewsFiltred = reviews.filter((item) =>  item !== reviewOne )




  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_15ad3lp', 'template_la4x037', e.target, 'user_gSMIoHR0ZYwbPcTrh5jsH')
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert("Merci votre message a bien été envoyé")
   }, function(error) {
      console.log('FAILED...', error);
      alert("Echec de l'envoi")
   });
   e.target.reset()
  }

  const [modaleOpen, setOpenModale] = useState(false)
  const [accOpen, setAccOpen] = useState(false)


  const accClassName = accOpen ? "open" : "close";
  const reviewClass = accOpen ? "active" : "";
  const viewmore = accOpen ? "Afficher Moins" : "Afficher Plus"

  const divMasq = modaleOpen ? "divMasq" : "nonvisible"

  const openModale = () => {
    setOpenModale(true)
  }

  const closeModale = () => {
    setOpenModale(false)
  }

  return (
    <>
    <Script id="script-EmailJs" type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></Script>
                  <Script id="emailjs-func" type="text/javascript">
                    {
                      (function() {
                emailjs.init("user_gSMIoHR0ZYwbPcTrh5jsH")
              })()
            }
        </Script>
    <Head>
    <meta  content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Marie Lilas Voyance</title>
    <meta name="author" content="Mathieu Figari"/>
    <meta name="keywords" content="Voyante voyance Surgère Charente Maritime Niort cartomancie Médium Tarot"/>
    <meta name="description" content="Bienvenue sur le Site de la Voyante Marie Lilas , Spécialisée dans la cartomancie, prédiction je vous apporte des réponses sur votre avenir je peux consulter par téléphone ou à mon domicile à Surgère en Charente Maritime"/>
    <meta property="og:type" content="Site Vitrine"/>
    </Head>
    <div className={styles.scrollContainer}>
      <div onClick={closeModale} className={divMasq}></div>
    <section className={styles.containerPrequel}>
      <div className={styles.theTitle}>
        <h1 className={styles.titre} ><span>Marie-Lilas</span><span>Voyance</span><span>Cartomancie</span></h1>
        <h2 className={styles.subtitle}>Ne Restez plus dans l'incertitude</h2>
        </div>
    </section>
    <section className={styles.about}>
      {
      modaleOpen && 
      <Slider closeModale={closeModale} />
 }
      <div className={styles.containAbout}>
      <div className={styles.aboutMe}>
        <h2 className={styles.aboutTitle}>Qui Suis-Je</h2>
        <div className={styles.aboutIntro}>Bonjour à vous! Je suis Marie-Lilas !</div>
        <div className={styles.descContain}>Quelque soit le secteur demandé, (professionnel, sentimental ou autre),  je suis là pour vous guider, vous rassurer, vous aider à faire un choix ou peut-être même,  vous redonner du baume au coeur ! Ne restez plus dans vos incertitudes ! Je suis là !</div>
        <div className={styles.descContain}>Appelez-moi !! En un coup de fil, votre vie peut prendre une autre couleur !! Et si le bout du tunnel n'était pas si loin !!!  Vous pouvez retrouver l'espoir, voire même le sourire !!  N'hésitez plus !!</div>
        <div className={styles.outro}>Je reçois aussi à domicile bien sûr !! (Surgères en Charente Maritime)</div>
        <div onClick={openModale} className={styles.seePhotos}>Voir Photos</div>
      </div>
      <div className={styles.marieLilaPhoto}>
      <Image
      alt='marie lila portrait'
      src={marieLila}
      width="625" height="960"/>
      </div>
      </div>
    </section>
    <section className={styles.reviews}>
      <h2 className={styles.reviews_title}>Les Avis</h2>
      <div className={styles.reviews}>

      <div onClick={() => setAccOpen(!accOpen)} key={reviewOne.time} className={`${styles.reviewOne} ${styles[reviewClass]}`}>
            <h3 className={styles.author}>{reviewOne.author_name}</h3>
            <div className={styles.rating}>
              <span   style={{backgroundImage: `url("/assets/startgrey.png")`}} className={styles.stars}>
                 <span style={{backgroundImage: `url("/assets/starOr.png")`, width: `${14*reviewOne.rating}px`}} className={styles.goodRating}></span>     
              </span>
              <div className={styles.comment}>
                {reviewOne.text}
              </div>
              <div className={styles.reviewPlus}>{viewmore}</div>
            </div>
            </div>

      <div className={styles[`${accClassName}`]}>
          {
              reviewsFiltred.map(rev => (

                <div key={rev.time} className={styles.review}>
            <h3 className={styles.author}>{rev.author_name}</h3>
            <div className={styles.rating}>
              <span   style={{backgroundImage: `url("/assets/startgrey.png")`}} className={styles.stars}>
                 <span style={{backgroundImage: `url("/assets/starOr.png")`, width: `${14*rev.rating}px`}} className={styles.goodRating}></span>     
              </span>
              <div className={styles.comment}>
                {rev.text}
              </div>
            </div>
        </div>


              ) )

          }
          </div>
</div>
      

          <Link  href="https://www.google.com/maps/place/marie-lilas+voyance/@46.1106532,-0.7493936,15z/data=!4m7!3m6!1s0x0:0x600bb945b79630c5!8m2!3d46.1106532!4d-0.7493936!9m1!1b1"><a target="_blank"><div className={styles.googleBtn}>Plus d'Avis</div></a></Link> 
      

    </section>

    <section id='scrollToContact' className={styles.contact}>
      <h2 className={styles.titleContact}>Contact</h2>
        <div className={styles.infosContact}>
          <div className={styles.adressInfos}> 
          <h3 className={styles.subtitContact}>Marie-Lilas-Voyance</h3>
            <address> 7 Rue Olivier Brillouet <br/> 17700 Surgères</address>
            <address> <p className={styles.email}>marie-lilas@hotmail.fr</p>
            <Link href="tel:+33681243124"><a className={styles.phoneNum}>06 81 24 31 24</a></Link>
            </address>
            </div> 


        <form onSubmit={sendEmail} className={styles.formContact}>
        
    <input className={styles.inputArea} type="text" id={styles.fname} name="name" placeholder="Votre nom et prénom"></input>

    <input className={styles.inputArea} type="number" id={styles.phone} name="phone" placeholder="Votre Numéro de Téléphone"></input>

    <input className={styles.inputArea} id={styles.emailAddress} type="email" name="email" placeholder="Votre email" />

    <textarea className={styles.inputArea} id={styles.subject} name="message" placeholder="Votre message" style={{height: "200px"}}></textarea>

    <input className={styles.submit} id={styles.submit} type="submit" value="Envoyer" />
  </form>
          
        </div>

    </section>
    </div>
    </>
  );
}


export async function getStaticProps(){
  const data = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJrfDopaQxB0gRxTCWt0W5C2A&fields=reviews&language=fr&key=AIzaSyCt2EVIy_OJAhCO3_QaJxGZTLd_EB4sqGU`)
  const reviews = await data.json();


  return{
    props: {
      reviews
    }
  }
}

