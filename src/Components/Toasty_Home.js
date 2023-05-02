import React from 'react'
import useWindowSize from '../Hooks/useWindowSize';
import ToastyFooter from './Toasty_Footer'
import { useNavigate } from 'react-router-dom'
import Toasty_Home_Landing from './HomePage/Toasty_Home_Landing';
import Toasty_Home_Features from './HomePage/Toasty_Home_Features';
import Toasty_Home_SocialProof from './HomePage/Toasty_Home_SocialProof';

const Toasty_Home = () => {
    const {width} = useWindowSize();// decoupling of data
    let navigate = useNavigate();

  return (
    <main className='flex-container'>
        <Toasty_Home_Landing/>
        <Toasty_Home_Features />
        <Toasty_Home_SocialProof />
       
        <div className='toasty_grid_home_owner'>
            <h2 style={{gridRow: '2', gridColumn: '2/ span 5', textAlign:'left', zIndex:'2', marginBottom:'5%'}}>
                Meet the Owner! Ginny Pasco!
            </h2>
            <div style={{display:'flex',  gridRow: width > 600 ? '3/ span 3': '3', gridColumn: width > 600 ? '2/ span 2' : '2 / span 5', zIndex:'1', justifyContent:'center'}}>
                <img className='img' alt='Ginny Yu Pasco' 
                src= {width > 600 ?'https://cdn.discordapp.com/attachments/1075543412582924378/1088121862980112505/portrait-smiling-asian-female-barista-wearing-apron-standing-near-counter-with-coffee-working-ginny-yu.jpg'
                        :
                        'https://cdn.discordapp.com/attachments/1075543412582924378/1088123235763228722/portrait-smiling-asian-female-barista-wearing-apron-standing-near-counter-with-coffee-working-CUT.jpg'
                 }
                style={{ objectFit:'cover', width: '100%', height: 'auto' }}
                />
            </div>
            <p style={{gridRow: '4', gridColumn: width > 600 ? '6' : '2/ span 5', textAlign:'left', zIndex:'2'}}>
                A Bread Expert and Sandwich Enthusiast, Ginny started Toasty to express her love for the craft and also to help those who don’t have the energy or time to cook for themselves. 
                <br/>
                <br/>
                “I remember when I was starting out as a young adult I had difficulty balancing between my work, studies, and life. This is why I made Toasty, to give a helping hand to those struggling to find balance in their life and to let them know there is always a place they can rely on to find a tasty meal.”
            </p>
            {   width > 600 ?
                <div style={{display:'flex',  gridRow: '5/ span 2', gridColumn: '3/ span 2', zIndex:'2', justifyContent:'flex-end'}}>
                    <img alt='bread sticker' src='https://cdn.discordapp.com/attachments/1075543412582924378/1082780169456074752/pngegg_3.png' 
                    style={{ objectFit:'contain', width:'100%', height:'auto'}} />
                </div>
                :''
            }
            
            <div style={{backgroundColor:'aliceBlue', gridColumn:'1 / span 7', gridRow:'1 / span 9'}}></div>
      
        </div> 

        <div className='toasty_grid_home_CTA'>
            <h3  style={{gridRow: '2', gridColumn: '2/ span 6', textAlign:'center', zIndex:'2', marginTop:'5%'}}>
                Check out our Sandwich of the Month!
            </h3>
            <div style={{ gridRow: '2/ span 8', gridColumn: '2 / span 6', zIndex:'1', display:'flex', justifyContent:'center'}}>
                <svg style={{width:'auto', height:'100%'}} viewBox="0 0 670 685" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M347.258 0.373391C414.932 -2.69748 485.51 36.9503 544.235 86.4064C603.36 135.638 651.257 194.856 665.117 259.945C679.203 325.436 659.426 396.171 642.501 466.365C626.201 536.737 613.152 606.343 570.99 643.69C528.829 681.037 457.329 685.724 394.756 683.825C332.184 681.926 278.314 673.04 223.744 658.211C168.948 642.981 113.452 621.808 64.5064 583.239C15.961 544.445 -4.16076 490.36 0.811562 436.365C5.55876 381.969 35.2251 328.289 71.5333 272.048C107.441 216.031 127.719 155.574 170.554 102.539C213.79 49.2804 279.185 3.66845 347.258 0.373391Z" fill="#F5DEB3"/>
                </svg>
            </div>
            <div style={{display:'flex', flexDirection:'column', backgroundColor:'#3F1A11', color:'aliceblue', gridRow: '4 /span 3', gridColumn: '5/ span 2', textAlign:'center', zIndex:'3', justifyContent:'center', marginLeft:'10%', marginRight:'10%', transform:'skew(-15deg', borderRadius:'10px', }}></div>
            <p style={{display:'flex', flexDirection:'column', color:'aliceblue', gridRow: '4 /span 3', gridColumn: '5/ span 2', textAlign:'center', zIndex:'3', justifyContent:'center', marginLeft:'10%', marginRight:'10%'}}>
                Chicken Katsu Sandwich
            </p>
            <div style={{display:'flex', gridRow: '3 / span 4', gridColumn: '3/ span 3', zIndex:'2', justifyContent:'center'}}>
               <img alt='Toasty Logo' src='https://cdn.discordapp.com/attachments/1075543412582924378/1082774305487720580/ToastyLogoEmptyOrange.png' 
               style={{ objectFit:'contain', width:'100%', height:'auto'}}/>
            </div>
            <div style={{display:'flex', gridRow: '5 / span 3', gridColumn: '3/ span 3', zIndex:'3', justifyContent:'flex-end'}}>
               <img alt='sandwich' src='https://cdn.discordapp.com/attachments/1075543412582924378/1088138105875341453/pngegg_8.png' 
               style={{ objectFit:'contain', width:'80%', height:'auto'}}/>
            </div>
            <div style={{ gridRow: '8', gridColumn: '3 / span 4', zIndex:'2', display:'flex', justifyContent:'center'}}>
                <button className='toasty_filled' style={{alignSelf:'center'}} onClick={()=>navigate('/toasty/toasty_underconstruction')}>
                    View our Menu
                </button>
            </div>
            <div style={{backgroundColor:'aliceBlue', gridColumn:'1 / span 8', gridRow:'1 / span 10'}}></div>
      
        </div>

        <ToastyFooter />
    </main>
  )
}

export default Toasty_Home