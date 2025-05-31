import { apiProdutos } from './api'

export async function listarProdutos() {
  const response = await apiProdutos.get('/produtos')
  return response.data
}
