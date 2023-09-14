import React from 'react';
import Toasty_Menu_Landing from './Toasty_Menu_Landing';
import ToastyFooter from '../Toasty_Footer';
import useWindowSize from '../../Hooks/useWindowSize';
import Toasty_Original_Menu from './Toasty_Original_Menu';
import Toasty_Custom_Menu from './Toasty_Custom_Menu';
import Toasty_Drinks_Desert_Menu from './Toasty_Drinks_Desert_Menu';

const MenuPage = () => {
  const {width} = useWindowSize();

  return (
    <main className='flex-container'>
        <Toasty_Menu_Landing />
        <Toasty_Original_Menu />
        <Toasty_Custom_Menu />
        <Toasty_Drinks_Desert_Menu />
        <ToastyFooter />
    </main>
  )
}

export default MenuPage