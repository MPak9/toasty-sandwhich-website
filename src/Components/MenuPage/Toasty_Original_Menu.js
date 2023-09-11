import React from 'react'
import useWindowSize from '../../Hooks/useWindowSize'
import Toasty_Menu_Item from './Toasty_Menu_Item';

const Toasty_Original_Menu = () => {
    const {width} = useWindowSize();
    const minWidth = 600;

    const original = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div className='menu_original_grid'>
        <h2 style={{ gridRow: '2', gridColumn: '2'}}>
            Toasty Original Sandwiches
        </h2>
        <div style={{gridRow:'2', gridColumn:'2'}}>
            {
                original.map(({color, hex}) => <Toasty_Menu_Item/>)
            }
            
        </div>
        
        <div style={{ gridRow: '1 / span 8', gridColumn: '1 / span 7', zIndex:'-4', backgroundColor:'aliceBlue'}}></div>

    </div>
  )
}

export default Toasty_Original_Menu