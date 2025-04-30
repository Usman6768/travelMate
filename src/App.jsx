import AgentNavbar from './components/AgentNavbar'
import Navbar from './components/Navbar'
import AgentDashboard from './pages/AgentDashboard'
import LandingPage from './pages/LandingPage'
import { Routes, Route, Navigate } from 'react-router-dom'
import SectionsPage from './pages/SectionsPage'


function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <AgentNavbar /> */}
      <Routes>
        <Route path='/agent-dashboard' element={<AgentDashboard/>} />
        <Route path='/' element={<LandingPage/>} />
        <Route path='/' element={<SectionsPage/>} />
      </Routes>
    </>
  )
}

export default App
