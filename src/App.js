import { BrowserRouter, Routes, Route, Outlet, ScrollRestoration, HashRouter } from 'react-router-dom';
import './App.css';
import ScrollToTop from './Hooks/ScrollToTop';
import Toasty_Layout from './Components/Toasty_Layout';
import Toasty_Home from './Components/Toasty_Home';
import Toasty_Underconstruction from './Components/Toasty_Underconstruction'

function App() {
  return (
    /* <BrowserRouter > */
    <HashRouter >
      <ScrollToTop >
        <Routes>
            <Route path ='/' element={<Toasty_Layout />} >
              <Route index element = {<Toasty_Home />} />
              <Route path='toasty_underconstruction' element = {<Toasty_Underconstruction />} />
            </Route>
          </Routes>
      </ScrollToTop>
     </HashRouter>
    /* </BrowserRouter> */
    /* Browser Routers don't work well in Github Pages */
  );
}

export default App;
