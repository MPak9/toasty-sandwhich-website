import { BrowserRouter, Routes, Route, Outlet, ScrollRestoration, HashRouter } from 'react-router-dom';
import './App.css';
import ScrollToTop from './Hooks/ScrollToTop';
import Toasty_Layout from './Components/Toasty_Layout';
import Toasty_Home from './Components/Toasty_Home';
import Toasty_Underconstruction from './Components/Toasty_Underconstruction'
import Toasty_About from './Components/AboutPage/Toasty_About';
import MobileMenu from './Components/MobileMenu';
import Contact from './Components/ContactPage/Contact';
import MenuPage from './Components/MenuPage/MenuPage';

function App() {
  return (
    /* <BrowserRouter > */
    <HashRouter >
      <ScrollToTop >
        <Routes>
            <Route path ='/' element={<Toasty_Layout />} >
              <Route index element = {<Toasty_Home />} />

              {/*<Route path='about' element = {<Toasty_About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='menu' element={<MenuPage />} /> */}
              <Route path='about' element = {<Toasty_Underconstruction />} />
              <Route path='contact' element={<Toasty_Underconstruction />} />
              <Route path='menu' element={<Toasty_Underconstruction />} />

              <Route path='toasty_underconstruction' element = {<Toasty_Underconstruction />} />
              <Route path='mobile_nav' element = {<MobileMenu />} />
            </Route>
          </Routes>
      </ScrollToTop>
     </HashRouter>
    /* </BrowserRouter> */
    /* Browser Routers don't work well in Github Pages */
  );
}

export default App;
