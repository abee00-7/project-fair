
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer'
import './App.css'
import { useContext } from 'react'
import { tokenAuthContext } from './contexts/AuthContext'

function App() {

  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth insideRegister={true} />} />
        <Route path='/projects' element={isAuthorised? <Projects/>:<Navigate to={'/login'}/>} />
        <Route path='/dashboard' element={isAuthorised?<Dashboard/>:<Navigate to={'/login'}/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
