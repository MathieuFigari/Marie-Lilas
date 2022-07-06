import styles from '../../styles/Home.module.css'
import { v4 as uuidv4 } from 'uuid'
import {useRouter} from 'next/router'



export default function liste(props) {

   const router = useRouter();

  return (
    <div className='container'>
        <h1 className={styles.titre} >{router.query.liste.charAt(0).toUpperCase() + router.query.liste.slice(1)}</h1>
        <table className={styles.table}>
          <tbody>
            {
              props.currentList.map(el => (
                <tr key={uuidv4()}>
                  <td >{el.en}</td>
                  <td >{el.fr}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
    </div>
  )
}


export async function getStaticProps(context){

    const mylist = context.params.liste

    const data = await import('/data/lists.json')

    const currentList = data.englishList.find(list => list.name === mylist)

    return{
        props: {
            currentList: currentList.data
        }
    }
}


export async function getStaticPaths(){
    const data = await import('/data/lists.json')

    const paths = data.englishList.map(item => ({
        params: {liste: item.name}
    }))

    return {
        // paths: [
        //     {
        //         params: { liste: "words"}
        //     }
        // ],
        paths,
        fallback: false
    }
}
