import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { apiPedidos } from '../services/api'

export default function HistoricoPedidos() {
  const { usuario } = useAuth()
  const [pedidos, setPedidos] = useState([])

  useEffect(() => {
    async function carregarPedidos() {
      try {
        const response = await apiPedidos.get(`/pedidos/usuario/${usuario.id}`)
        setPedidos(response.data)
      } catch (err) {
        alert('Erro ao carregar pedidos.')
      }
    }

    if (usuario) {
      carregarPedidos()
    }
  }, [usuario])

  return (
    <div style={{ maxWidth: 800, margin: 'auto', padding: 20 }}>
      <h2>Meus Pedidos</h2>
      {pedidos.length === 0 ? (
        <p>Você ainda não fez nenhum pedido.</p>
      ) : (
        pedidos.map(pedido => (
          <div key={pedido.id} style={{ border: '1px solid #ccc', marginBottom: 16, padding: 16 }}>
            <h3>Pedido #{pedido.id}</h3>
            <p>Total: R$ {pedido.total.toFixed(2)}</p>
            <p>Status: {pedido.status}</p>
            <ul>
              {pedido.itens.map(item => (
                <li key={item.id}>
                  Produto ID: {item.produtoId} | Quantidade: {item.quantidade}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  )
}
