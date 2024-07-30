import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './components/Login/login';
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="App">
  <React.StrictMode>
    <GoogleOAuthProvider 
      clientId={import.meta.env.VITE_REACT_APP_CLIENTEID}>
      <Login />

    </GoogleOAuthProvider>  
  </React.StrictMode>
  </div>

)
