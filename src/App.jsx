import { useState, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import LoginRegister from './components/LoginRegister'
import Dashboard from './components/Dashboard'

import './App.css'
import Auth from './auth/Auth'
export const AuthContext = createContext()
function App() {

  const [token, setToken] = useState()
  return (
    <AuthContext.Provider value={{token,setToken}}>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginRegister page={'Login'} />} />
          <Route path='/register' element={<LoginRegister page={'Register'} />} />
          <Route path='/dash' element={<Auth><Dashboard /></Auth>} />


        </Routes>

      </div>
    </AuthContext.Provider>
  )
}

export default App
