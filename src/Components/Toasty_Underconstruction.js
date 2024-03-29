import React from 'react'
import ToastyFooter from './Toasty_Footer'
import ToastyHeader from './Toasty_Header'
import underconstructionLogo from '../Resources/ToastyLogoFULLOrange.png'

const Toasty_Underconstruction = () => {
  return (
    <main className='flex-container' style={{backgroundColor:'aliceblue'}} >
        <ToastyHeader style={{zIndex:'3'}} />
        <div style={{height:'70vh', display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center'}} >
            <h2> Underconstruction</h2>
            <p>Coming soon! Thank you!</p>
            <div style={{display:"flex", justifyContent:'center'}}>
              <img alt='toasty logo' src={underconstructionLogo} style={{ objectFit:'cover', width:'5%', height:'auto', minWidth:'50px'}} />
            </div>
        </div>
        <ToastyFooter />
    </main>
  )
}
export default Toasty_Underconstruction