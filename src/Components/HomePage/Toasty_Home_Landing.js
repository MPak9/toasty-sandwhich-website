import React from 'react'
import ToastyHeader from '../Toasty_Header'
import useWindowSize from '../../Hooks/useWindowSize'
import { useNavigate } from 'react-router-dom'
/*
Toast Home Component for Landing Page
*/
const Toasty_Home_Landing = () => {
    const {width, height} = useWindowSize();// decoupling of data
    let navigate = useNavigate();

  return (
    <div className='toasty_grid_home_landing'>
            {
                ( height > width) && (height - width > 210 ) && (width > 600) ?
                <h1 className='stroke_alice floating' style={{gridRow:'7', gridColumn:"2/span 6", zIndex:'7'}}>
                    For a better experience on your device, please rotate if able. Thank you!
                </h1>
                :''
            }
            <div style={{ gridRow: '1', gridColumn: '1 / span 7'}}>
                {/* Make a wrapper for the Components if you want to style it or place in a grid */}
                <ToastyHeader />
            </div>
            <div style={{ gridRow: width < 1000 ? '3 / span 3' : '4/ span 3', gridColumn:'4', marginTop: width > 1500 ? '7%' : '0%'}}>
                <h1 style={{gridRow:'3',gridColumn:'4'}}>
                    Toasty sandwiches for the tired soul
                </h1>
                <p style={{gridColumn: width < 1000 ? '4': '5', gridRow:'4'}}>
                    Simple and satisfying sandwiches made fresh with good toasty bread, and a touch of home.
                </p>
                <div style={{ gridColumn: width < 1000 ? '4': '5', gridRow:'5'}}>
                    <button className='toasty_filled' onClick={()=>navigate('/toasty/toasty_underconstruction')}>
                        View our Menu
                    </button>
                </div>
            </div>
            <div style={{
                    gridColumn:'2 / span 4',
                    gridRow: width < 1000 ? '2 / span 5' : '3/ span 5',
                    zIndex:'-3',
                    
            }}>
                <svg preserveAspectRatio='none' viewBox="0 0 638 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.6636 90.6315C56.7635 49.0502 92.9254 34.1913 114.579 28.9055C126.434 26.0117 138.709 26.025 150.912 26.0491L249.929 26.2447C330.219 26.4027 414.021 -11.9557 492.397 5.475C522.469 12.1632 556.775 28.2638 593.515 60.5406C646.643 107.214 647.741 192.173 619.39 275.208C602.863 323.613 547.649 370.443 547.649 370.443L490.51 407.048C442.437 437.845 422.971 452.953 367.524 466.56C287.786 486.128 169.768 486.645 96.7187 449.162C83.7836 442.525 72.0356 435.677 63.0005 428.969C-2.1543 380.593 0.142632 235.084 0.142632 235.084C0.142632 235.084 -3.40716 162.262 34.6636 90.6315Z" fill="#F5DEB3"/>
                </svg>
            </div>
            <div style={{
                display:'grid',
                gridTemplateRows:'1fr 0.1fr',
                gridColumn:'1 / span 7',
                gridRow: width < 1000 ? '8' : '9',
                marginBottom:'0',
               
            }}>
                <div style={{ display:'flex', flexDirection:'column-reverse', gridColumn:'1' ,gridRow:'1 / span 2', verticalAlign:'bottom'}}>
                    <svg preserveAspectRatio='none' viewBox="0 0 1440 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 91.6392C659.5 128.139 763 -32.8607 1440 6.13925V118.5H0V91.6392Z" fill="#FFA500"/>
                    </svg>
                </div>
                <div style={{ gridColumn:'1', gridRow:'2', backgroundColor:'orange'}} ></div>
            </div>
            <div style={{
                    backgroundColor:'aliceblue',
                    gridRow:'1 / span 9',
                    gridColumn:'1 / span 8',
                    zIndex:'-4',
                    display:'flex',
                }}
            >
                <img alt='Table full of sandwiches' src='https://cdn.discordapp.com/attachments/1075543412582924378/1080584657734729828/top-view-fresh-sandwiches-arrangement-white-background.jpg'
                style={{ objectFit:'cover', width:'100%', height:'auto'}}
                />
            </div>
        </div>
  )
}

export default Toasty_Home_Landing