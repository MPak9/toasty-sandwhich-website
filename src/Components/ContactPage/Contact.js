import React from 'react'
import ToastyHeader from '../Toasty_Header'
import ToastyFooter from '../Toasty_Footer'
import useWindowSize from '../../Hooks/useWindowSize'

import ToastyLogo from '../../Resources/ABOUT/ToastyLogoBlue_Stroke.png'
import ToastyStore from '../../Resources/CONTACT/toasty-store-sign.jpg'
import sandwich from '../../Resources/CONTACT/sandwich.png'

const Contact = () => {
    const {width} = useWindowSize();

  return (
    <main className='flex-container' >
        <div className='contact_grid'>
            <div style={{ gridRow: '1', gridColumn: '1 / span 10', zIndex:'2'}}>
                {/* Make a wrapper for the Components if you want to style it or place in a grid */}
                <ToastyHeader />
            </div>
            <div style={{display:'flex', gridRow: '3', gridColumn: '2 / span 2', justifyContent:'flex-start', transform: 'rotate(-12deg)'}}>
                <img alt='Toasty Logo' src={ToastyLogo}
                style={{ objectFit:'contain', width:'100%', minWidth: width > 600 ? '200px' : '135px', height:'auto'}}/>
            </div>
            <h1  className='stroke_alice' style={{gridRow:'3',gridColumn:'3 / span 2', alignSelf:'flex-end', zIndex:'1'}}>
                Contact
            </h1>
            <h2 style={{gridRow:'4', gridColumn: width > 600 ? '3 / span 3' : '3/ span 6', marginTop:'10%'}}>
                xxx - xxx - xxxx
            </h2>
            <p style={{gridRow:'5', gridColumn: width > 600 ? '3 / span 3': '3/ span 6', marginTop:'5%'}}>
                Call to make an order!
            </p>
            <div style={{gridRow: width > 600 ? '3 / span 2' : '6', gridColumn: width > 600 ? '7 / span 2' : '3 / span 6', display:'grid'}}>
                
                <div style={{display:'flex',  gridRow: '1 / span 4', gridColumn: '1 / span 5', zIndex:'2', justifyContent: width > 600 ? 'flex-end': 'flex-start'}}>
                    <img className='img' alt='She laughs' src= {ToastyStore}
                    style={{ objectFit:'contain', width: '90%', height:'auto'}} />
                </div>
                <div className='comment stroke_alice' style={{gridRow: '3', gridColumn: '1 / span 3', justifyContent:'center', alignSelf:'center', transform: 'rotate(-10deg)'}}>
                    We do delivery too!
                </div>
                <div className='comment stroke_alice' style={{gridRow: '4/ span 2', gridColumn: '2 / span 2', justifyContent:'center', alignSelf:'flex-end'}}>
                    <img className='img' alt='sandwich icon' src= {sandwich}
                    style={{ objectFit:'contain', width: '70%', height:'auto'}} />
                </div>
            </div>
           
        </div>
        <ToastyFooter />
    </main>
  )
}

export default Contact