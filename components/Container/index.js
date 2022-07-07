import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'

export default function Container(props) {
  return (
    <div>
        <NavBar />
        {props.children}
        <Footer />
    </div>
  )
}
