import './App.css'
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login'
import {Toaster} from 'react-hot-toast'
import CreatePage from './pages/CreatePage/CreatePage';
import StoryDetail from './pages/Detail/StoryDetail';
import TrendingPage from './pages/TrendingPage/TrendingPage';
import Allpost from './pages/allpost/Allpost';
import EditStory from './pages/EditStory';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Router>
      <AuthProvider>
          <Toaster/>
        <Routes>
          < Route path='/' element={<LandingPage />} />
          < Route path='signup' element={<Signup />} />
          < Route path='login' element={<Login />} />
          < Route path= 'createpage' element={<CreatePage/>}/>
          < Route path= 'trending' element={<TrendingPage/>}/>
          < Route path= 'allpost' element={<Allpost/>}/>
          < Route path= 'edit/:id' element={<EditStory/>}/>
          < Route path= 'searchpage' element={<SearchPage/>}/>
          < Route path= 'storydetail/:id' element={<StoryDetail/>}/>
          
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App;
