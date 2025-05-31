import axios from 'axios'

export const apiProdutos = axios.create({
  baseURL: 'http://localhost:8081'
})

export const apiUsuarios = axios.create({
  baseURL: 'http://localhost:8082'
})

export const apiPedidos = axios.create({
  baseURL: 'http://localhost:8083'
})

export const apiPagamentos = axios.create({
  baseURL: 'http://localhost:8084'
})
