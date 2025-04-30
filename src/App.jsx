import AgentNavbar from './components/AgentNavbar'
import Navbar from './components/Navbar'
import AgentDashboard from './pages/AgentDashboard'
import LandingPage from './pages/LandingPage'
import { Routes, Route, Navigate } from 'react-router-dom'
import SectionsPage from './pages/SectionsPage'
import SignupPage from './pages/auth/Signup'
import LoginPage from './pages/auth/LoginPage'


function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <AgentNavbar /> */}
      <Routes>
        <Route path='/agent-dashboard' element={<AgentDashboard/>} />
        <Route path='/' element={<LandingPage/>} />
        <Route path='/' element={<SectionsPage/>} />
        <Route path='/signup' element={<SignupPage />}/>
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
