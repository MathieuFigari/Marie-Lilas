import React from 'react'

export default function Slider() {
  return (
    <div class="containerSlide">
	<div class="slideshow">
		<div id="slide-1" class="slide">
			<a href="#slide-7"></a>
			<a href="#slide-2"></a>
			<img src="https://c1.staticflickr.com/9/8724/16310801553_cea90ae63d_n.jpg" />
		</div>
		<div id="slide-2" class="slide">
			<a href="#slide-1"></a>
			<a href="#slide-3"></a>
			<img src="https://c2.staticflickr.com/4/3719/19819674272_2384feaaf8_n.jpg" />
		</div>
		<div id="slide-3" class="slide">
			<a href="#slide-2"></a>
			<a href="#slide-4"></a>
			<img src="https://c2.staticflickr.com/2/1627/24319275501_3ec6f36fa7_n.jpg" />
		</div>
		<div id="slide-4" class="slide">
			<a href="#slide-3"></a>
			<a href="#slide-5"></a>
			<img src="https://c2.staticflickr.com/2/1460/25194537936_e3c54faefc_n.jpg" />
		</div>
		<div id="slide-5" class="slide">
			<a href="#slide-4"></a>
			<a href="#slide-6"></a>
			<img src="https://c2.staticflickr.com/2/1460/26216238325_9c425923a7_n.jpg" />
		</div>
		<div id="slide-6" class="slide">
			<a href="#slide-5"></a>
			<a href="#slide-7"></a>
			<img src="https://c2.staticflickr.com/8/7578/26194232483_8204bf119b_n.jpg" />
		</div>
		<div id="slide-7" class="slide">
			<a href="#slide-6"></a>
			<a href="#slide-1"></a>
			<img src="https://c2.staticflickr.com/8/7106/26862741906_d5283c42ba_n.jpg" />
		</div>
	</div>
  <div class="pagination">
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
