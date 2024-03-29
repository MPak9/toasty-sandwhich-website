import React from 'react'

import defaultSandwichofMonth from '../../Resources/chickenKatsuSando.png'

const Toasty_Menu_Item = ({name, price, imgSrc}) => {
  return (
    <div className='menu_item_component_grid'>
        <div style={{ gridRow:'1/ span 2', gridColumn:'1/ span 2', display:'flex', zIndex:'-2', justifyContent:'center'}}>
               <img className='sandwich_of_month' alt='sandwich' src={imgSrc}/>
        </div>
        <div  style={{gridRow:'2', gridColumn:'2', textAlign:'center', transform:'rotate(-10deg)', display:'flex', justifyContent:'center'}}>
            <p className='comment stroke_alice' style={{alignSelf:'center'}}>
                {price}
            </p>
        </div>
        <p style={{gridRow:'3', gridColumn:'1/ span 2', textAlign:'center'}}>
            {name}
        </p>
    </div>
  )
}

export default Toasty_Menu_Item

//In the case the neccessary props are undefined, these are the default values
Toasty_Menu_Item.defaultProps = {
  price:'$1.50',
  imgSrc: defaultSandwichofMonth
}