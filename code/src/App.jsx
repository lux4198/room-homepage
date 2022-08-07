import './App.css'

/* images */

import heroImageDesktop1 from '../src/images/desktop-image-hero-1.jpg'
import heroImageDesktop2 from '../src/images/desktop-image-hero-2.jpg'
import heroImageDesktop3 from '../src/images/desktop-image-hero-3.jpg'
import heroImageMobile1 from '../src/images/mobile-image-hero-1.jpg'
import heroImageMobile2 from '../src/images/mobile-image-hero-2.jpg'
import heroImageMobile3 from '../src/images/mobile-image-hero-3.jpg'

/* text */

import {heroTextTitle1, heroTextTitle2, heroTextTitle3, heroTextMain1,
  heroTextMain2, heroTextMain3, detailsTextTitle, detailsTextMain} from '../src/assets/text.js'

/* icons and svgs */

const iconArrow = () => {
  return(
    <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="currentColor" fill-rule="nonzero"/>
    </svg>
  )
}


function App() {

  return (
    <div>
      <main>
        <div class = "App">
          <div class = 'hero-wrap'>
            <div class = 'nav-wrap'>
              <nav>

              </nav>
            </div>
            <div class = 'hero-image'>
              <picture>
                <source media='(min-width: 700px)' srcSet= {`${heroImageDesktop1}`}/>
                <source media='(max-width: 700px)' srcSet= {`${heroImageMobile1}`}/>
                <img src= {`${heroImageMobile1}`} alt = 'hero-image'/>
              </picture>
            </div>
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
          </div>
          <div class = 'details-wrap'>
            <img /> 
            <div class = 'details-text'>
              <h1 class = 'details-text-title'>{detailsTextTitle}</h1>
              <p>{detailsTextMain}</p>
            </div>
            <img />
          </div>
        </div>
      </main>
      <footer style = {{'position' : 'absolute', 'bottom' : '0'}}>
        <h1>Footer</h1>
      </footer>
    </div>
  )
}

export default App
