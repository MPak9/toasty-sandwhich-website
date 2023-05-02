import React from 'react'
import useWindowSize from '../Hooks/useWindowSize'

const ToastyFooter = () => {
    const {width, height} = useWindowSize();

  return (
    <div className='toasty_grid_footer' style={{backgroundColor:'steelBlue', paddingBottom: '10vh', paddingTop:'3%'}} >
        <p className='comment' style={{gridRow:'2', gridColumn:'2 / span 4', textAlign:'center'}}>Come visit us at Toasty!</p>
        <ul style={{gridRow:'3', gridColumn:'3', paddingLeft:'0', textAlign:'center'}}>
            <li className='comment stroke_alice'>Days</li>
            <li>Mon</li>
            <li>Tues</li>
            <li>Wed</li>
            <li>Thurs</li>
        </ul>
        <ul style={{gridRow:'3', gridColumn:'4', paddingLeft:'0', textAlign:'center'}}>
            <li className='comment stroke_alice'>Hours</li>
            <li>9am - 11pm</li>
            <li>12pm - 1am</li>
            <li>12pm - 1am</li>
            <li>12pm- 1am</li>
        </ul>
        <p style={{gridRow:'5', gridColumn:'3 / span 2', textAlign:'center', color:"aliceBlue"}}>2014 Millennium Street, SweetDream, NewCity, 71216</p>
    </div>
  )
}

export default ToastyFooter