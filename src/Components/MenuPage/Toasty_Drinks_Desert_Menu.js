import React from 'react';
import useWindowSize from '../../Hooks/useWindowSize';


const Toasty_Drinks_Desert_Menu = () => {
    const {width} = useWindowSize();

    const original = ["1.00","2.00","3.00","4.00","5.00","6.00","7.00","8.00"];
    
  return (
    <div className='menu_drinks_grid'>
        <h2 style={{ gridRow: '2', gridColumn: '2'}}>
            Drinks
        </h2>
        <ul style={{ gridRow: '3', gridColumn:'2'}}>
            {
                original.map((i) => <li className='normal'><span>{i}</span> <span style={{paddingLeft:'5vw'}} >{i}</span></li>)
            }
        </ul>
        <h2 style={{ gridRow: '2', gridColumn: width > 600 ? '4' : '5'}}>
            Dessert
        </h2>
        <ul style={{ gridRow: '3', gridColumn: width > 600 ? '4' : '5'}}>
            {
                original.map((i) => <li className='normal'><span>{i}</span> <span style={{paddingLeft:'5vw'}} >{i}</span></li>)
            }
        </ul>
        <div style={{display:'flex', flexDirection:'column-reverse', gridRow: '4 /span 2', gridColumn: '5 / span 2', zIndex:'2'}}>
            <img alt='club sandwich logo' src='https://cdn.discordapp.com/attachments/1075543412582924378/1082335574444228718/pngegg_1.png'
            style={{ objectFit:'contain', width:'60%', height:'auto',  transform: 'scaleX(-1)', alignSelf:'center', minWidth:'150px'}}/>
        </div> 
    </div>
  )
}

export default Toasty_Drinks_Desert_Menu