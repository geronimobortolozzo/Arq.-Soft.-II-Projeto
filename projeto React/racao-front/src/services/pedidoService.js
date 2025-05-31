import axios from 'axios'

const API_URL = 'http://localhost:8083/pedidos' // ajuste a porta se necessário

// Criar um novo pedido
export async function criarPedido(pedido) {
  const response = await axios.post(API_URL, pedido)
  return response.data
}

// Listar pedidos de um usuário específico
export async function listarPedidosPorUsuario(usuarioId) {
  const response = await axios.get(`${API_URL}/usuario/${usuarioId}`)
  return response.data
}
