import React from 'react'
import Image from 'next/image'

export default function Slider() {
  return (
    <div className="containerSlide">
	<div className="slideshow">
		<div id="slide-1" className="slide">
			<a href="#slide-7"></a>
			<a href="#slide-2"></a>
			<Image
            layout='fill' objectFit='cover'
            width="1920" height="1280"
            src="/assets/slid1.jpeg" />
		</div>
		<div id="slide-2" className="slide">
			<a href="#slide-1"></a>
			<a href="#slide-3"></a>
			<Image
            layout='fill' objectFit='cover'
            width="1920" height="1920" 
            src="/assets/slid2.jpeg" />
		</div>
		<div id="slide-3" className="slide">
			<a href="#slide-2"></a>
			<a href="#slide-4"></a>
			<Image
            layout='fill' objectFit='cover'
            width="1920" height="1285" 
            src="/assets/slid3.jpeg" />
		</div>
		<div id="slide-4" className="slide">
			<a href="#slide-3"></a>
			<a href="#slide-5"></a>
			<Image
            layout='fill' objectFit='cover'
            width="1920" height="1281" 
            src="/assets/slid4.jpeg" />
		</div>
		<div id="slide-5" className="slide">
			<a href="#slide-4"></a>
			<a href="#slide-6"></a>
			<Image
            layout='fill' objectFit='cover'
            width="1280" height="800" 
            src="/assets/slid5.jpeg" />
		</div>
		<div id="slide-6" className="slide">
			<a href="#slide-5"></a>
			<a href="#slide-7"></a>
			<Image
            layout='fill' objectFit='cover'
            width="1920" height="1280" 
            src="/assets/slid6.jpg" />
		</div>
		<div id="slide-7" className="slide">
			<a href="#slide-6"></a>
			<a href="#slide-1"></a>
			<Image
            layout='fill' objectFit='cover'
            width="1920" height="1280" 
            src="/assets/slid7.jpeg" />
		</div>
	</div>
  <div className="pagination">
    <a href="#slide-1"><span>1</span></a>
    <a href="#slide-2"><span>2</span></a>
    <a href="#slide-3"><span>3</span></a>
    <a href="#slide-4"><span>4</span></a>
    <a href="#slide-5"><span>5</span></a>
    <a href="#slide-6"><span>6</span></a>
    <a href="#slide-7"><span>7</span></a>
  </div>
</div>
  )
}
