import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import Admin from './pages/Admin'
import SignIn from './pages/SignIn'


const RoutesApp = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/'                    element={<Home />}/>
        <Route path='/SignIn'               element={<SignIn />}/>
        <Route path='/admin'               element={<Admin />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default RoutesApp
