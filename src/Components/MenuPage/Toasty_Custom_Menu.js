import React from 'react'
import Toasty_Menu_Item from './Toasty_Menu_Item';
import useWindowSize from '../../Hooks/useWindowSize'
import { Breads } from '../../JSON API/Breads';
import { Filling, Topping, Cheeses, Sauces } from '../../JSON API/FIlling';

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
                Breads.map(({name, price, img}) => <Toasty_Menu_Item name={name} price={price} imgSrc={img} />)
            }
            
        </div>
        <h3 style={{ gridRow: '6', gridColumn: '2'}}>
            Fillings
        </h3>
        <ul style={{ gridRow: '7', gridColumn: width > 600 ? '2' : '2/ span 3'}}>
            {
                Filling.map(({name}) => <li className='normal'><span>$1.50</span> <span style={{paddingLeft:'5vw'}} >{name}</span></li>)
            }
        </ul>
        <h3 style={{ gridRow: '6', gridColumn: width > 600 ? '4' : '5'}}>
            Toppings
        </h3>
        <ul style={{ gridRow: '7', gridColumn: width > 600 ? '4' : '5'}}>
            {
                Topping.map(({name}) => <li className='normal'><span>{name}</span></li>)
            }
        </ul>
        <h3 style={{ gridRow: width > 600 ? '6' : '8', gridColumn: width > 600 ? '5' : '2'}}>
            Cheeses
        </h3>
        <ul style={{ gridRow: width > 600 ? '7' : '9', gridColumn: width > 600 ? '5' : '2'}}>
            {
                Cheeses.map(({name}) => <li className='normal'><span>{name}</span></li>)
            }
        </ul>
        <h3 style={{ gridRow: width > 600 ? '6' : '8', gridColumn: width > 600 ? '6' : '5'}}>
            Sauces
        </h3>
        <ul style={{ gridRow: width > 600 ? '7' : '9', gridColumn: width > 600 ? '6' : '5'}}>
            {
                Sauces.map(({name}) => <li className='normal'><span>{name}</span></li>)
            }
        </ul>

        <div style={{
            display:'grid',
            gridTemplateRows:'1fr 0.1fr',
            gridColumn:'1 / span 7',
            gridRow: '8',
            marginBottom:'0',
            zIndex:'-3'
        }}>
            <div style={{ display:'flex', flexDirection:'column-reverse', gridColumn:'1' ,gridRow:'1 / span 2', verticalAlign:'bottom'}}>
                <svg preserveAspectRatio='none' viewBox="0 0 1440 182" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 137.781C744 227.036 673 -47.5946 1440 7.33154V182H0V137.781Z" fill="#F0F8FF"/>
                </svg>
            </div>
            <div style={{ gridColumn:'1', gridRow:'2', backgroundColor:'aliceBlue'}}></div>
        </div>
        <div style={{ gridRow: '9 / span 5', gridColumn: '1 / span 7', zIndex:'-3', backgroundColor:'aliceBlue'}}></div>
        <div style={{ gridRow: '1 / span 10', gridColumn: '1 / span 7', zIndex:'-4', backgroundColor:'wheat'}}></div>
    </div>
  )
}

export default Toasty_Custom_Menu