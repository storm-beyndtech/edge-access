import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from './context/AuthContext.tsx'
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Router>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
  </React.StrictMode>
)
