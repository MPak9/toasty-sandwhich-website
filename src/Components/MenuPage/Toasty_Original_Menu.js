import React from 'react'
import useWindowSize from '../../Hooks/useWindowSize'
import Toasty_Menu_Item from './Toasty_Menu_Item';

const Toasty_Original_Menu = () => {
    const {width} = useWindowSize();
    const minWidth = 600;

    const original = ["1.00","2.00","3.00","4.00","5.00","6.00","7.00","8.00","9.00","10.00"];

  return (
    <div className='menu_original_grid'>
        <h2 style={{ gridRow: '2', gridColumn: '2'}}>
            Toasty Original Sandwiches
        </h2>
        <div style={{gridRow:'4', gridColumn:'2', display:'grid', gridTemplateColumns: width > minWidth ? 'repeat(5, 1fr)': 'repeat(3, 1fr)'}}>
            {
                original.map((i) => <Toasty_Menu_Item name={i} price={i} />)
            }
            
        </div>
        <div style={{
            display:'grid',
            gridTemplateRows:'1fr 0.1fr',
            gridColumn:'1 / span 7',
            gridRow: '6',
            marginBottom:'0',
            zIndex:'-3'
        }}>
            <div style={{ display:'flex', flexDirection:'column-reverse', gridColumn:'1' ,gridRow:'1 / span 2', verticalAlign:'bottom'}}>
                <svg preserveAspectRatio='none' viewBox="0 0 1440 182" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 137.781C744 227.036 673 -47.5946 1440 7.33154V182H0V137.781Z" fill="#F5DEB3"/>
                </svg>
            </div>
            <div style={{ gridColumn:'1', gridRow:'2', backgroundColor:'wheat'}}></div>
        </div>
        <div style={{ gridRow: '1 / span 8', gridColumn: '1 / span 7', zIndex:'-4', backgroundColor:'aliceBlue'}}></div>

    </div>
  )
}

export default Toasty_Original_Menu