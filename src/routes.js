import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import Admin from './pages/Admin'
import SignIn from './pages/SignIn'
import SignUp from "./pages/SignUp";


const RoutesApp = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/'                    element={<Home />}    />
        <Route path='/admin'               element={<Admin />}   />
        <Route path='/signin'              element={<SignIn />}  />
        <Route path='/cadastro'            element={<SignUp />}  />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default RoutesApp
