import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoutes from './components/PrivateRoutes'
import RegisterPage from './Page/RegisterPage'

import { AuthProvider } from './utils/AuthContext'
import Room from './Page/Room'
import LoginPage from './Page/LoginPage'



function App() {

  return (
    
    <Router>
      
      <AuthProvider>
        
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
              <Route element={<PrivateRoutes/>}>
                  <Route path="/" element={<Room/>}/>
              </Route>
        </Routes>
      </AuthProvider>
    </Router>
  
)
}

export default App
