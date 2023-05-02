import React from 'react'
import useWindowSize from '../Hooks/useWindowSize';
import { Link, useNavigate } from 'react-router-dom';

const ToastyHeader = () => {
    const {width} = useWindowSize();// decoupling of data
    let navigate = useNavigate();
  return (
    <div className='toasty_grid_header'>
        <div style={{ backgroundColor:'steelblue', gridColumn:'1/ span 7', gridRow:'1/ span 2',border:'2px solid steelblue'}}></div>
        {width > 600 ?
            <div style={{display:'flex', zIndex:'2', gridColumn:'2', gridRow:'1/ span 3'}}>
                <img alt='toasty logo' src='https://cdn.discordapp.com/attachments/1075543412582924378/1082414169388765224/ToastyLogoFULLBrown.png'style={{ alignSelf:'flex-start', objectFit:'cover', width:'70%', height:'auto', minWidth:'50px'}} />
                </div>
            :''
        }         
        <div className='logo_title'><div>TOASTY</div></div>
        {width > 600 ?
            <div className='nav'>
                <span style = {{padding:'10px 5px', paddingBottom:'0px' }}>
                    <button className='toasty_filled' style={{padding: '0.5vh 2vw'}} onClick={()=>navigate('/toasty/toasty_underconstruction')}>
                        Menu
                    </button>
                </span>
                <div style = {{padding:'10px 5px', paddingBottom:'0px'  }}>
                    <button className='toasty_ghost' style={{padding: '0.5vh 2vw'}} onClick={()=>navigate('/toasty/toasty_underconstruction')}>
                        Contact
                    </button>
                </div>
                <div className='link' style = {{padding:'15px 10px', paddingBottom:'0px' }}
                    onClick={()=>{navigate(`/toasty/toasty_underconstruction`)}}>
                    About
                </div>
                <div className='link' style = {{padding:'15px 10px', paddingBottom:'0px'  }}
                    onClick={()=>{navigate(`/toasty`)}}>
                    Home
                </div>
            </div>
            :
            <div className='nav'>
                Navigate
            </div>
        }
        
        
        <div style={{ display:'flex', flexDirection:'column', gridColumn:'1/ span 7', gridRow:'2/ span 2', zIndex:'-1',}}>
            <svg style={{filter:'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}} preserveAspectRatio='none' viewBox="0 0 1440 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H1440V20.5H1311.5C1311.5 20.5 1014 20.5 865 20.5C566.571 20.5 337 75.5 0 42V0Z" fill="#4682B4"/>
            </svg>
        </div>
                
    </div>
  )
}

export default ToastyHeader