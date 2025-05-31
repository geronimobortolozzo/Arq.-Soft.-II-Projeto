import { Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'
import DetalheProduto from './pages/DetalheProduto'
import CarrinhoPage from './pages/CarrinhoPage'
import HistoricoPedidos from './pages/HistoricoPedidos'

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/cadastro">Cadastro</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/produto/:id" element={<DetalheProduto />} />
        <Route path="/carrinho" element={<CarrinhoPage />} />
        <Route path="/pedidos" element={<HistoricoPedidos />} />
      </Routes>
    </>
  )
}
