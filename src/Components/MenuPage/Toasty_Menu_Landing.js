import React from 'react';
import ToastyHeader from '../Toasty_Header';
import useWindowSize from '../../Hooks/useWindowSize';

const Toasty_Menu_Landing = () => {
    const {width} = useWindowSize();
    const minWidth = 600;

  return (
    <div className='menu_landing_grid'>
        <div style={{ gridRow: '1', gridColumn: '1 / span 7'}}>
            {/* Make a wrapper for the Components if you want to style it or place in a grid */}
            <ToastyHeader />
        </div>
        <div style={{ gridRow: width > minWidth ? '2 / span 2' : '2', gridColumn: width > minWidth ? '2 / span 3' : '2/ span 4', display:'flex', justifyContent:'center'}}>
            <h2 style={{alignSelf:'center'}}>
                Sandwich of the Month
            </h2>
        </div>
        <div style={{gridRow: width > minWidth ? '5' : '4', gridColumn: width > minWidth ? '3 / span 2': '5', display:'flex', justifyContent:'center', transform: 'rotate(-10deg)'}}>
            <p className='comment stroke_alice' style={{alignSelf:'center', textAlign:'center'}}>
                $1.50
                <br/>
                Chicken Katsu
            </p>
        </div>
        <div style={{display:'flex', gridRow: width > minWidth ? '3/ span 4': '3/ span 3', gridColumn: width > minWidth ? '2/ span 3' : '2/ span 4', zIndex:'-2', justifyContent:'center'}}>
               <img className='sandwich_of_month' alt='sandwich' src='https://cdn.discordapp.com/attachments/1075543412582924378/1088138105875341453/pngegg_8.png'/>
        </div>
        <div style={{ gridRow: width > minWidth ? '3/ span 4' : '3 /span 3', gridColumn: width > minWidth ? '2 / span 3' : '2/ span 4', zIndex:'1', display:'flex', justifyContent:'center', zIndex:'-3'}}>
            <svg style={{width:'auto', height:'100%', alignSelf: 'center'}} viewBox="0 0 538 518" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.7145 406.469C-5.93219 357.536 -2.25982 291.024 12.486 229.735C26.9338 168.23 52.3643 111.422 93.765 77.6626C135.373 43.5914 192.446 32.6655 248.146 19.8269C303.756 6.46184 357.694 -9.03086 398.827 8.65672C439.96 26.3444 468.081 77.5239 488.43 124.48C508.78 171.437 521.152 214.482 529.548 260.192C537.736 306.213 541.949 354.899 531.541 405.024C520.835 454.934 489.417 489.35 449.362 505.176C409.099 521.314 360.704 518.766 308.189 512.231C255.971 505.911 206.02 512.754 153.517 500.235C100.715 487.5 45.659 455.618 19.7145 406.469Z" fill="#F5DEB3"/>
            </svg>
         </div>
        
        <div style={{ gridRow: width > minWidth ? '2 / span 5' : '5 / span 3', gridColumn: width > minWidth ? '5' : '2 / span 4', display:'flex'}}>
            <p style={{alignSelf:'center', textAlign:'center'}}>
                Introducing our Chicken Katsu Sandwich! It's a crispy delight with tender chicken, fresh cabbage, and our signature Katsu sauce, all nestled between two slices of soft bread. Crunchy, savory, and utterly delicious.
            </p>  
        </div>
        
        <div style={{
            display:'grid',
            gridTemplateRows:'1fr 0.1fr',
            gridColumn:'1 / span 7',
            gridRow: '7/ span 2',
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
        <div style={{ gridRow: '1 / span 8', gridColumn: '1 / span 7', zIndex:'-4', backgroundColor:'orange'}}>
            
            
        </div>
    </div>
  )
}

export default Toasty_Menu_Landing