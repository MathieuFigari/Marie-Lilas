import React from 'react'
import Link from "next/link"
import { v4 as uuidv4 } from 'uuid';

export default function Listes(props) {

  return (
    <div className='container'>
<h1 className='my-4'>Les listes de Vocabulaire</h1>        
<ul className="list-group">
  {
    props.lists.map(el => (
        <li key={uuidv4()} className='list-group-item'>
            <Link href={`/listes/${el.name}`}>
                <a>{el.name}</a>
            </Link>
        </li>
        
    ) )
  }
</ul>
      
    </div>
  )
}

export async function getStaticProps(){
    const data = await import(`/data/lists.json`)
    const lists = data.englishList;
  
  
  
    return{
      props: {
        lists
      }
    }
  }