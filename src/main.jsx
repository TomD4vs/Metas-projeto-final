import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MetasProvider } from './contexts/MetasContext'
import './index.css'
import App from './App.jsx'
 
createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Metas-projeto-final/">
    <MetasProvider>
      <App />
    </MetasProvider>
  </BrowserRouter>
)
 