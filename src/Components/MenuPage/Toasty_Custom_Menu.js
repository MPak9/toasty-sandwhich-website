import React from 'react'

const Toasty_Custom_Menu = () => {
  return (
    <div className='menu_custom_grid'>
        <h2 style={{ gridRow: '2', gridColumn: '2 / span 3'}}>
            Custom Make!
        </h2>
        <div style={{ gridRow: '1 / span 10', gridColumn: '1 / span 7', zIndex:'-4', backgroundColor:'wheat'}}></div>
    </div>
  )
}

export default Toasty_Custom_Menu