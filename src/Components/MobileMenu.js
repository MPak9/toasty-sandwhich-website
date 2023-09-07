import React from 'react'
import { useNavigate } from 'react-router-dom'
import ToastyHeader from './Toasty_Header';
import ToastyFooter from './Toasty_Footer';

const MobileMenu = () => {
    let navigate = useNavigate();
  return (
    <div className='flex-container, mobile-nav' style={{background: 'steelBlue'}}>
        <ToastyHeader />
        <div className='flex-container, mobile-nav-content' >
            <div className='link' style = {{padding:'15px 10px', paddingBottom:'0px' }}
                onClick={()=>{navigate(`/`)}}>
                Home
            </div>
        
            <div className='link' style = {{padding:'15px 10px', paddingBottom:'0px' }}
                onClick={()=>{navigate(`/about`)}}>
                About
            </div>
            <div style = {{padding:'10px 5px', paddingBottom:'0px'  }}>
                <button className='toasty_filled' style={{padding: '1vh 4vw'}} onClick={()=>navigate('/menu')}>
                    Menu
                </button>
            </div>
            <div style = {{padding:'10px 5px', paddingBottom:'0px'  }}>
                <button className='toasty_ghost' style={{padding: '1vh 4vw'}} onClick={()=>navigate('/contact')}>
                    Contact
                </button>
            </div>
        </div>
        
    
    </div>
  )
}

export default MobileMenu