import axios from 'axios'

const apiProdutos = axios.create({
  baseURL: 'http://localhost:8081' // <-- apenas isso
})

export const listarProdutos = () => {
  return apiProdutos.get('/produtos') // agora sim vai para http://localhost:8081/produtos
}
