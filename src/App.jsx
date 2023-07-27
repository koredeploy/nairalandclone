import './App.css'
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App;
