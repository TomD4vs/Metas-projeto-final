import './App.css'
import { Routes, Route } from 'react-router-dom'
import LayoutPrincipal from './components/LayoutPrincipal'
import PaginaInicio from './pages/PaginaInicio'
import PaginaMetas from './pages/PaginaMetas'
import PaginaDetalhes from './pages/PaginaDetalhes'
import PaginaNaoEncontrada from './pages/PaginaNaoEncontrada'

function App() {
  return (
    <div className="AplicationReact">
      <Routes>
        <Route element={<LayoutPrincipal />}>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/metas" element={<PaginaMetas />} />
          <Route path="/meta/:id" element={<PaginaDetalhes />} />
        </Route>
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>
    </div>
  )
}

export default App