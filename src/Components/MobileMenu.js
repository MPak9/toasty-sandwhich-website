import React from 'react'
import { useNavigate } from 'react-router-dom'
import ToastyHeader from './Toasty_Header';

const MobileMenu = () => {
    let navigate = useNavigate();
  return (
    <div className='flex-container, mobile-nav' style={{background: 'steelBlue'}}>
        <ToastyHeader />
        <div style={{display:'flex', justifyContent:'flex-end'}}>
        <button className='toasty_filled' style={{padding: '0.5vh 2vw', alignSelf:'flex-end'}} onClick={()=>navigate('/toasty_underconstruction')}>
            X
        </button>
        </div>
        <div className='link' style = {{padding:'15px 10px', paddingBottom:'0px'  }}
            onClick={()=>{navigate(`/`)}}>
            Home
        </div>
       
        <div className='link' style = {{padding:'15px 10px', paddingBottom:'0px' }}
            onClick={()=>{navigate(`/about`)}}>
            About
        </div>
        <button className='toasty_filled' style={{padding: '0.5vh 2vw'}} onClick={()=>navigate('/toasty_underconstruction')}>
            Menu
        </button>
        <div style = {{padding:'10px 5px', paddingBottom:'0px'  }}>
            <button className='toasty_ghost' style={{padding: '0.5vh 2vw'}} onClick={()=>navigate('/toasty_underconstruction')}>
                Contact
            </button>
        </div>
    </div>
  )
}

export default MobileMenu