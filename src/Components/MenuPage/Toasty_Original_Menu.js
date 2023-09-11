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
        
        <div style={{ gridRow: '1 / span 8', gridColumn: '1 / span 7', zIndex:'-4', backgroundColor:'aliceBlue'}}></div>

    </div>
  )
}

export default Toasty_Original_Menu