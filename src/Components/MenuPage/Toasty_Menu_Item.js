import React from 'react'

const Toasty_Menu_Item = () => {
  return (
    <div className='flex-container'>
        <div style={{display:'flex', zIndex:'-2', justifyContent:'center'}}>
               <img className='sandwich_of_month' alt='sandwich' src='https://cdn.discordapp.com/attachments/1075543412582924378/1088138105875341453/pngegg_8.png'/>
        </div>
        <p style={{textAlign:'center'}}>
            Name
        </p>
    </div>
  )
}

export default Toasty_Menu_Item