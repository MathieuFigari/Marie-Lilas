import React from 'react'
import Image from 'next/image'
import img1 from '../public/assets/img1.jpg'
import img2 from '../public/assets/img2.jpg'
import img3 from '../public/assets/img3.jpg'

export default function galery() {
  return (
    <div>
        <Image
        layout='responsive'
        placeholder='blur' 
        src={img1}
        width="4000"
        height="5656"
        />
        <Image
        layout='responsive'
        placeholder='blur'  
        src={img2}
        width="3648"
        height="5472"
        />
        <Image
        layout='responsive'
        placeholder='blur'  
        src={img3}
        width="6000"
        height="8000"
        />
       { /*<img src='/assets/img1.jpg' /> */ }
    </div>
  )
}
