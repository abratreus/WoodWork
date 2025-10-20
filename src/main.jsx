import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // ou HashRouter
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/base.css'
import './styles/_variables.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Art-Moveis-WoodWork">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
