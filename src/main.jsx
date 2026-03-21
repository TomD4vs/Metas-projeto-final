import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MetasProvider } from './contexts/MetasContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MetasProvider>
        <App />
      </MetasProvider>
    </BrowserRouter>
  </StrictMode>
)