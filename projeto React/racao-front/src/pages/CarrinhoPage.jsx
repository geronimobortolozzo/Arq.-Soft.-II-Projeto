import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { apiPedidos } from '../services/api'

export default function Carrinho() {
  const [carrinho, setCarrinho] = useState([])
  const { usuario } = useAuth()

  useEffect(() => {
    const dados = localStorage.getItem('carrinho')
    if (dados) {
      setCarrinho(JSON.parse(dados))
    }
  }, [])

  const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0)

  const finalizarPedido = async () => {
    if (!usuario) {
      alert('Você precisa estar logado para finalizar o pedido.')
      return
    }

    const pedido = {
      usuarioId: usuario.id,
      itens: carrinho.map(item => ({
        produtoId: item.id,
        quantidade: item.quantidade
      })),
      total: total
    }

    try {
      await apiPedidos.post('/pedidos', pedido)
      localStorage.removeItem('carrinho')
      setCarrinho([])
      alert('Pedido realizado com sucesso!')
    } catch (error) {
      alert('Erro ao finalizar pedido.')
    }
  }

  return (
    <div style={{ maxWidth: 800, margin: 'auto', padding: 20 }}>
      <h2>Seu Carrinho</h2>
      {carrinho.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <div>
          {carrinho.map(item => (
            <div key={item.id} style={{ borderBottom: '1px solid #ccc', padding: 10 }}>
              <h4>{item.nome}</h4>
              <p>Quantidade: {item.quantidade}</p>
              <p>Preço unitário: R$ {item.preco.toFixed(2)}</p>
              <p>Total: R$ {(item.preco * item.quantidade).toFixed(2)}</p>
            </div>
          ))}
          <h3>Total geral: R$ {total.toFixed(2)}</h3>
          <button onClick={finalizarPedido}>Finalizar Pedido</button>
        </div>
      )}
    </div>
  )
}
