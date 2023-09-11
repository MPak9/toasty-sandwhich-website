import React from 'react';
import Toasty_Menu_Landing from './Toasty_Menu_Landing';
import ToastyFooter from '../Toasty_Footer';
import useWindowSize from '../../Hooks/useWindowSize';

const MenuPage = () => {
  const {width} = useWindowSize();

  return (
    <main className='flex-container'>
        <Toasty_Menu_Landing />
        <ToastyFooter />
    </main>
  )
}

export default MenuPage