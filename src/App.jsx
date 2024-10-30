import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useParams, useNavigate, useSearchParams } from "react-router-dom"
import Home from './pages/home'
import Layout from './pages/layout'
import Login from './pages/login'
import Register from './pages/register'
import Activation from './pages/activation'
import PrivateRoute from './components/privateRoute'


function App() {



  return (
    <div className="min-h-screen w-screen ">
    <Routes>
      <Route index element={<Navigate to="/home" replace />} />
      <Route path="/home" element={ <PrivateRoute > <Home /> </PrivateRoute> } />
      <Route path="/security" element={<Layout />} >
          <Route index element={<Navigate to="login" />} />
          <Route path="login" element={<Login />} />
          <Route path="register"  element={<Register />} />
          <Route path="activation"  element={<Activation />} />
      </Route>
      <Route path="*"  element={<Navigate to="/" replace={true} />} />
    </Routes>
    </div>
  )
}

export default App
