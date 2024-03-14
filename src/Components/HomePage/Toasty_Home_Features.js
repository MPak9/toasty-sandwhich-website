import React from 'react'
import useWindowSize from '../../Hooks/useWindowSize';

import glowingWindow from '../../Resources/HOMEPAGE/GlowingWindow.jpg'
import logoEmptyBrown from '../../Resources/ToastyLogoEmptyBrown.png'
import clubSandwich from '../../Resources/ClubSandwich.png'
import backgroundCooking from '../../Resources/HOMEPAGE/backgroundCooking.png'
import hamCheeseToast from '../../Resources/HOMEPAGE/ham-cheese-toast-blue-towel.jpg'

/*
This is the block of Toasty Home Features
*/
const Toast_Home_Features = () => {
    const {width} = useWindowSize();// decoupling of data
  return (
    <div style={{display:"flex", flexDirection:'column'}} >
       <div className='toasty_grid_home_f1'>
            <div className='comment' style={{gridRow: '2 / span 2', gridColumn: '2 / span 4', textAlign:'center', display:'flex', margin:'auto',  alignItems:'center', justifyContent:'center',  transform: 'rotate(-5deg)'}}>
                WELCOME TO TOASTY!
            </div>
            <div className='img' style={{display:'flex',  gridRow: '3 / span 3', gridColumn: '3 / span 4'}}>
                <img className='img' alt='welcome to Toasty picture' src={glowingWindow} 
                style={{ objectFit:'cover', width:'100%', height:'auto'}}/>
            </div>
            <p style={width > 700 ? {gridRow: '4', gridColumn: '8 /span 2'} : {gridRow:'6', gridColumn: '3 /span 4'} }>
                A glowing orange window welcomes you to find some comfort for the weary stomach away from the busy world.
            </p>
            {width > 400 ? 
                <div style={{display:'flex', gridRow: '2 /span 2', gridColumn: '2 /span 2', zIndex:'-1'}}>
                    <img alt='toasty logo' src={logoEmptyBrown} style={{ alignSelf:'flex-end', opacity: '0.5', objectFit:'cover', width:'100%', height:'auto', transform: 'rotate(-12deg)' }} ></img>
                </div>
                :''
            }
            <div style={{display:'flex', gridRow: width > 700 ? '5 / span 2' : '7 / span 2', gridColumn: width > 700 ? '6 /span 2' : '4 / span 2', zIndex:'2'}}>
                <img alt='club sandwich logo' src={clubSandwich}
                style={{ objectFit:'cover', width:'100%', height:'auto',  transform: 'scaleX(-1)', marginLeft:'30%'}}/>
            </div>
            <div className='comment' style={{textAlign:'center', gridRow: width > 700 ? '5': '7', gridColumn: width > 700 ? '6 /span 4': '4 /span 4'}}>
                Come on in!
            </div>
            <div style={{backgroundColor:'orange', gridColumn:'1 / span 11', gridRow:'1 / span 8', zIndex:'-2'}}></div>
      
        </div> 

        <div className='toasty_grid_home_f2'>
            <p style={{gridRow: '2', gridColumn: '2'}}>
                The toasty smell of bread lingers in the air with the crispy sound of grilling patties and vegetable fillings. 
            </p>
            <div style={{display:'flex', gridRow: '3 / span 2', gridColumn: '2', justifyContent:'flex-start', marginLeft:'10%', transform:'translateY(-1rem)'}}>
                <span className='comment' style={{transform:'translateY(1rem)'}}>M</span>
                <span className='comment' style={{transform:'translateY(0.8rem)'}}>M</span>
                <span className='comment' style={{transform:'translateY(0.6rem)'}}>M</span>
                <span className='comment' style={{transform:'translateY(0.8rem)'}}>M</span>
                <span className='comment' style={{transform:'translateY(1rem)'}}>M</span>
                <span className='comment' style={{transform:'translateY(1.5rem)'}}>M</span>
                <span className='comment' style={{transform:'translateY(2rem)'}}>M</span>
                <span className='comment' style={{transform:'translateY(3rem)'}}>M</span>
                <span className='comment' style={{transform:'translateY(4rem)'}}>M</span>
                <span className='comment' style={{transform:'translateY(4.5rem)'}}>M</span>
                <span className='comment' style={{transform:'translateY(4.6rem)'}}>M</span>
                <span className='comment' style={{transform:'translateY(4.8rem)'}}>M</span>
                <span className='comment' style={{transform:'translateY(4.6rem)'}}>M</span>
                <span className='comment' style={{transform:'translateY(4.7rem)'}}>~</span>
                
            </div>
            <div style={{display:'flex',  gridRow: '4 / span 3', gridColumn: '2 / span 4', zIndex:'-1'}}>
                <img alt='background cooking' className='img' src={backgroundCooking} style={{ objectFit:'cover', width:'100%', height:'auto'}}/>
            </div>
            <p style={{ display:'flex', flexDirection:'column', justifyContent:'center', gridRow: '7', gridColumn: width > 700 ? '4 / span 2': '2 / span 3'}}>
                It’s the orchestra of a meal being prepared for you.
            </p>
            <div style={{backgroundColor:'orange', gridColumn:'1 / span 6', gridRow:'1 / span 9', zIndex:'-2'}}></div>
      
        </div> 

        <div className='toasty_grid_home_f3'>
            <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', gridRow: '2 /span 3', gridColumn: '1 /span 3', textAlign:'center', transform: 'rotate(-12deg)'}}>
                <span className='comment' >TADAH!</span><span className='comment' >Bon Appetit!</span>
            </div>
            <p style={{ gridRow: width > 700 ? '4 / span 3' : '7', gridColumn: width > 700 ? '5' : '2/ span 4', display:'flex', margin:'auto',  alignItems:'center', justifyContent:'center'}}>
                In a short time a simple sandwich is presented before you! Made with good crunchy bread and fresh ingredients! A filling meal to end the day and to regain your energy for the next. 
            </p>
            <div style={{display:'flex',  gridRow: '4 / span 3', gridColumn: width > 700 ? '2 / span 2' : '2/ span 4', zIndex:'-1'}}>
                <img alt='background-finished ham and cheese toast' className='img' src={hamCheeseToast}
                 style={{ objectFit:'cover', width:'100%', height:'auto'}}/>
            </div>
            <div style={{backgroundColor:'orange', gridColumn:'1 / span 6', gridRow:'1 / span 9', zIndex:'-2'}}></div>
      
        </div> 
    </div>
  )
}

export default Toast_Home_Features