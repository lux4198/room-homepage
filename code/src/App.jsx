import './App.css'
import { useState } from 'react'

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


const iconMenu = () => {
  return(
    <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="currentColor" fill-rule="evenodd"/></svg>
  )
}

const iconClose = () => {
  return(
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#000" fill-rule="evenodd" opacity=".201"/></svg>
  )
}


const iconArrow = () => {
  return(
    <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="currentColor" fill-rule="nonzero"/>
    </svg>
  )
}


function App() {

  const heroImagesDesktop = [heroImageDesktop1, heroImageDesktop2, heroImageDesktop3]
  const heroImagesMobile = [heroImageMobile1, heroImageMobile2, heroImageMobile3]

  const heroTextTitles = [heroTextTitle1, heroTextTitle2, heroTextTitle3]
  const heroTextDetails = [heroTextMain1, heroTextMain2, heroTextMain3]

  const [imageSlide, setImageSlide] = useState(0)

  /* functions switch between hero images and hero text when user clicks arrows */
  const nextImage = () => {
    (imageSlide === 2)? setImageSlide(0) : setImageSlide(imageSlide + 1)
  }

  const previousImage = () => {
    (imageSlide === 0)? setImageSlide(2) : setImageSlide(imageSlide - 1)
  }

  const [menuMobile, setMenuMobile] = useState(false)

  return (
    <div>
      <main>
        <div class = "App">
          <div class = 'hero-wrap'>
            <nav class = 'nav-wrap'>
              <div class = 'nav-menu-icon' onClick = {() => setMenuMobile(!menuMobile)}
                    >
                {menuMobile? iconClose() : iconMenu()}
              </div>
              <img class = 'nav-logo' src = {logo} alt = 'logo'/>
              <div class = {menuMobile? 'nav-items-wrap-toggle' : 'nav-items-wrap'}>
                <p class = 'nav-item'>home</p>
                <p class = 'nav-item'>shop</p>
                <p class = 'nav-item'>about</p>
                <p class = 'nav-item'>contact</p>
              </div>
            </nav>
            <div class = 'hero-image' style = {{'backgroundImage' : `url(${(window.innerWidth > 430) ? heroImagesDesktop[imageSlide] : heroImagesMobile[imageSlide]})`}}>
              {/* <picture>
                <source media='(min-width: 700px)' srcSet= {`${heroImageDesktop1}`}/>
                <source media='(max-width: 700px)' srcSet= {`${heroImageMobile1}`}/>
                <img src= {`${heroImageMobile1}`} alt = 'hero-image'/>
              </picture> */}
              <div class = 'slider-button-wrap'>
                  <div class = 'slider-button' onClick={() => nextImage()}>
                    <img src = {iconAngleLeft} alt = 'icon-angle-left'/>
                  </div>
                  <div class = 'slider-button' onClick={() => previousImage()}>
                    <img src = {iconAngleRight} alt = 'icon-angle-left'/>
                  </div>
                </div>
            </div>
            <div class = 'hero-right-side-wrap'>
              <div class = 'hero-text-wrap'>
                <h1 class = 'hero-text-title'>
                  {heroTextTitles[imageSlide]}
                </h1>
                <p class = 'hero-text-main'>
                  {heroTextDetails[imageSlide]}
                </p>
                <div class = 'call-to-action'>
                  <p>SHOP NOW {iconArrow()}</p>
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
    </div>
  )
}

export default App
