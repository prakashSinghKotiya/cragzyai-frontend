import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { AuthProvider } from './context/Authcontext.jsx'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="509013077515-9bn4jrt5j0m2nff1sib4ujee3qo4r8l8.apps.googleusercontent.com">
      <AuthProvider>
  <BrowserRouter >
    <App />
  </BrowserRouter>
  </AuthProvider>
  </GoogleOAuthProvider>
)
