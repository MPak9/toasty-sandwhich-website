import React from 'react'
import useWindowSize from '../../Hooks/useWindowSize'
import ToastyHeader from '../Toasty_Header';


const Toasty_About_Landing = () => {
    const {width} = useWindowSize();// decoupling of data

  return (
    <div className='toasty_grid_about_landing' >
        <div style={{ gridRow: '1', gridColumn: '1 / span 7'}}>
            {/* Make a wrapper for the Components if you want to style it or place in a grid */}
            <ToastyHeader />
        </div>
        <div style={{display:'flex', gridRow: '3/ span 2', gridColumn: '2/ span 2', justifyContent:'center', transform: 'rotate(-12deg)', zIndex:'-2'}}>
            <img alt='Toasty Logo' src='https://cdn.discordapp.com/attachments/1075543412582924378/1105200469065875516/ToastyLogoFULLABLUE_STROKE_ALICE.png' 
        style={{ objectFit:'contain', width:'100%', minWidth:'300px', height:'auto'}}/>
        </div>
        <h1  className='stroke_alice' style={{gridRow:'4',gridColumn:'3 / span 4'}}>
            What is Toasty?
        </h1>
        <div style={{
            display:'grid',
            gridTemplateRows:'1fr 0.1fr',
            gridColumn:'1 / span 7',
            gridRow: '3/ span 2',
            marginBottom:'0',
            zIndex:'-3'
        }}>
            <div style={{ display:'flex', flexDirection:'column-reverse', gridColumn:'1' ,gridRow:'1 / span 2', verticalAlign:'bottom'}}>
                <svg preserveAspectRatio='none' viewBox="0 0 1440 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.33514e-05 67.7005C1.33514e-05 67.7005 543.999 76.2007 911.5 29.7005C1279 -16.7998 1440 5.20036 1440 5.20036V93.2007H0L1.33514e-05 67.7005Z" fill="#F0F8FF"/>
                </svg>
            </div>
            <div style={{ gridColumn:'1', gridRow:'2', backgroundColor:'aliceBlue'}}></div>
        </div>
        
        <div style={{ gridRow:'1 / span 9', gridColumn:'1 / span 8', zIndex:'-4', display:'flex',}}>
            <img   alt='Background' src='https://cdn.discordapp.com/attachments/1075543412582924378/1105193978430754907/nikita-tikhomirov-mArOwkbUc5E-unsplash.jpg'
            style={{ objectFit:'cover', width:'100%', height:'auto'}} />
        </div>

    </div>
  )
}

export default Toasty_About_Landing