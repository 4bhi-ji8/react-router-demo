
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Users from './Pages/Users'
import UserDetails from './Pages/UserDetails'


import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
