import React from 'react'
import useWindowSize from '../../Hooks/useWindowSize';


const Toasty_SocialProof_Quotes = ({name, job, quote, imgSrc}) => {
  const {width} = useWindowSize();// decoupling of data
  return (
    <div style={{
        display:'grid',
        gridTemplateColumns:'1fr 1fr 0.5fr 2fr 1fr',
        gridTemplateRows:'1fr 1fr 2fr 1fr'
    }}>
        <div style={{alignSelf:'center', gridRow:'2', gridColumn:'2', zIndex:'1', aspectRatio:'1/1', borderRadius:'100%'}}>
          <img src={imgSrc} style={{ objectFit:'cover', width:'100%', height:'auto', borderRadius:'100%'}}/>
        </div>
        <p className='stroke_wheat' style={{gridRow:'2', gridColumn:'4', zIndex:'1'}}>{name}<br/>{job}</p>
        <p className='stroke_wheat' style={{gridRow:'3', gridColumn:'2/ span 3', zIndex:'1', textAlign:'center'}}>
            {quote}
        </p> 
        <img alt='Bread Background' src='https://cdn.discordapp.com/attachments/1075543412582924378/1077664137762582578/slicedBread2.png'
        style={{objectFit:'cover', alignSelf:'center',width:'100%', height:'auto',gridRow:'1/span 4', gridColumn:'1/ span 5' }}/>

    </div>
  )
}

export default Toasty_SocialProof_Quotes