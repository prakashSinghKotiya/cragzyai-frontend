import React, { useEffect } from 'react'
import LandingPage from './Pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AssistantBuilder from './Pages/BuildAssistant'
import EditAssistant from './Pages/EditAssistant'
import PlansPage from './Pages/Plans.jsx'
import { ToastContainer } from 'react-toastify'
import { useAuth } from './context/Authcontext'
import ProtectedRoute from './Components/Protection'
import axios from 'axios'


function App() {
    const { setUser, setLoading } = useAuth();
    console.log("App component rendered, setUser and setLoading functions:")

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          "https://cragzy-ai.onrender.com/user/",
          {
            withCredentials: true,
          }

        );
        
        setUser(response.data);

        
      } catch (error) {
        setUser(null);
      }finally {
      setLoading(false);
    }
    };

    getUser();
  }, []);

  
 

  return (
    <>
    <ToastContainer position="top-center"  theme="dark" autoClose={500}  />
    <Routes>

  
    <Route path="/" element={<LandingPage />} />  
    <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} /> 
    <Route path="/create" element={<ProtectedRoute><AssistantBuilder /></ProtectedRoute>} />
    <Route path="/edit" element={<ProtectedRoute><EditAssistant /></ProtectedRoute>} />
    <Route path="/plans" element={<ProtectedRoute><PlansPage /></ProtectedRoute>} />
     
    </Routes>
    
    </>
    
  )
}

export default App
