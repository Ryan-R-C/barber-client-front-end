import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import Admin from './pages/Admin'
import SignIn from './pages/SignIn'
import SignUp from "./pages/SignUp";
import TEST from "./pages/TEST";


const RoutesApp = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/'                    element={<Home   />}    />
        <Route path='/admin'               element={<Admin  />}   />
        <Route path='/signin'              element={<SignIn />}  />
        <Route path='/cadastro'            element={<SignUp />}  />
        <Route path='/test'            element={<TEST />}  />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default RoutesApp
