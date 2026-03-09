// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'   // ← Import this
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/AuthContext.jsx'
import { BookingsProvider } from './context/BookingsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>          {/* ← Wrap your whole app here */}
     <AuthProvider>
     <BookingsProvider>          {/* ← Add here */}
          <App />
      </BookingsProvider>
     </AuthProvider>
      
    </BrowserRouter>
  </React.StrictMode>,
)