import React from 'react'
import { Outlet } from 'react-router-dom'
import useWindowSize from '../Hooks/useWindowSize'

const Toasty_Layout = () => {
  const {width} = useWindowSize();// decoupling of data
  
  return (
    <main className='flex-container toasty'>
        <Outlet width={width} />
    </main>
  )
}

export default Toasty_Layout