import './App.css'

/* images */

import heroImageDesktop1 from '../src/images/desktop-image-hero-1.jpg'
import heroImageDesktop2 from '../src/images/desktop-image-hero-2.jpg'
import heroImageDesktop3 from '../src/images/desktop-image-hero-3.jpg'
import heroImageMobile1 from '../src/images/mobile-image-hero-1.jpg'
import heroImageMobile2 from '../src/images/mobile-image-hero-2.jpg'
import heroImageMobile3 from '../src/images/mobile-image-hero-3.jpg'
import imageAboutDark from '../src/images/image-about-dark.jpg'
import imageAboutLight from '../src/images/image-about-light.jpg'


/* text */

import {heroTextTitle1, heroTextTitle2, heroTextTitle3, heroTextMain1,
  heroTextMain2, heroTextMain3, detailsTextTitle, detailsTextMain} from '../src/assets/text.js'

/* icons and svgs */

import iconAngleLeft from '../src/images/icon-angle-left.svg'
import iconAngleRight from '../src/images/icon-angle-right.svg'
import logo from '../src/images/logo.svg'
import { useState } from 'react'


const iconArrow = () => {
  return(
    <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="currentColor" fill-rule="nonzero"/>
    </svg>
  )
}


function App() {

  const heroImagesDesktop = [heroImageDesktop1, heroImageDesktop2, heroImageDesktop3]

  const [imageSlide, setImageSlide] = useState(0)

  /* functions switch between hero images when user clicks arrows */
  const nextImage = () => {
    (imageSlide === 2)? setImageSlide(0) : setImageSlide(imageSlide + 1)
  }

  const previousImage = () => {
    (imageSlide === 0)? setImageSlide(2) : setImageSlide(imageSlide - 1)
  }

  return (
    <div>
      <main>
        <div class = "App">
          <div class = 'hero-wrap'>
            <nav class = 'nav-wrap'>
              <img src = {logo} alt = 'logo'/>
              <div class = 'nav-items-wrap'>
                <p class = 'nav-item'>home</p>
                <p class = 'nav-item'>shop</p>
                <p class = 'nav-item'>about</p>
                <p class = 'nav-item'>contact</p>
              </div>
            </nav>
            <div class = 'hero-image' style = {{'backgroundImage' : `url(${heroImagesDesktop[imageSlide]})`}}>
              {/* <picture>
                <source media='(min-width: 700px)' srcSet= {`${heroImageDesktop1}`}/>
                <source media='(max-width: 700px)' srcSet= {`${heroImageMobile1}`}/>
                <img src= {`${heroImageMobile1}`} alt = 'hero-image'/>
              </picture> */}
            </div>
            <div class = 'hero-right-side-wrap'>
              <div class = 'hero-text-wrap'>
                <h1 class = 'hero-text-title'>
                  {heroTextTitle1}
                </h1>
                <p class = 'hero-text-main'>
                  {heroTextMain1}
                </p>
                <div class = 'call-to-action'>
                  <p>SHOP NOW {iconArrow()}</p>
                </div>
              </div>
              <div class = 'slider-button-wrap'>
                  <div class = 'slider-button' onClick={() => nextImage()}>
                    <img src = {iconAngleLeft} alt = 'icon-angle-left'/>
                  </div>
                  <div class = 'slider-button' onClick={() => previousImage()}>
                    <img src = {iconAngleRight} alt = 'icon-angle-left'/>
                  </div>
                </div>
            </div>
          </div>
          <div class = 'details-wrap'>
            <div class = 'details-image' style = {{'backgroundImage' : `url(${imageAboutDark})`}}/>
            {/* <img src = {imageAboutDark} alt = 'image-about-dark'/>  */}
            <div class = 'details-text-wrap'>
              <div class = 'details-text'>
                <h1 class = 'details-text-title'>{detailsTextTitle}</h1>
                <p>{detailsTextMain}</p>
              </div>
            </div>
            <div class = 'details-image' style = {{'backgroundImage' : `url(${imageAboutLight})`}}/>
            {/* <img src = {imageAboutLight} alt = 'image-about-light'/> */}
          </div>
        </div>
      </main>
      <footer style = {{'paddingTop': '1000px'}}>
        <h1>Footer</h1>
      </footer>
    </div>
  )
}

export default App
