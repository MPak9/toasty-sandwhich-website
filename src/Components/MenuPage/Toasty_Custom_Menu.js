import React from 'react'
import Toasty_Menu_Item from './Toasty_Menu_Item';
import useWindowSize from '../../Hooks/useWindowSize'

const Toasty_Custom_Menu = () => {
    const {width} = useWindowSize();
    const minWidth = 600;

    const original = ["1.00","2.00","3.00","4.00","5.00","6.00","7.00","8.00"];

  return (
    <div className='menu_custom_grid'>
        <h2 style={{ gridRow: '2', gridColumn: '2 / span 3'}}>
            Custom Make!
        </h2>
        <h3 style={{ gridRow: '3', gridColumn: '2 / span 3'}}>
            Breads
        </h3>
        <div style={{gridRow:'4', gridColumn:'2 / span 5', display:'grid', gridTemplateColumns: width > minWidth ? 'repeat(5, 1fr)': 'repeat(3, 1fr)'}}>
            {
                original.map((i) => <Toasty_Menu_Item name={i} price={i} />)
            }
            
        </div>
        <h3 style={{ gridRow: '5', gridColumn: '2'}}>
            Fillings
        </h3>
        <ul style={{ gridRow: '6', gridColumn: '2'}}>
            {
                original.map((i) => <li className='normal'><span>{i}</span> <span style={{paddingLeft:'5vw'}} >{i}</span></li>)
            }
        </ul>
        <h3 style={{ gridRow: '5', gridColumn: '4'}}>
            Toppings
        </h3>
        <ul style={{ gridRow: '6', gridColumn: '4'}}>
            {
                original.map((i) => <li className='normal'><span>{i}</span></li>)
            }
        </ul>
        <h3 style={{ gridRow: '5', gridColumn: '5'}}>
            Cheeses
        </h3>
        <ul style={{ gridRow: '6', gridColumn: '5'}}>
            {
                original.map((i) => <li className='normal'><span>{i}</span></li>)
            }
        </ul>
        <h3 style={{ gridRow: '5', gridColumn: '6'}}>
            Sauces
        </h3>
        <ul style={{ gridRow: '6', gridColumn: '6'}}>
            {
                original.map((i) => <li className='normal'><span>{i}</span></li>)
            }
        </ul>
        <div style={{ gridRow: '1 / span 10', gridColumn: '1 / span 7', zIndex:'-4', backgroundColor:'wheat'}}></div>
    </div>
  )
}

export default Toasty_Custom_Menu