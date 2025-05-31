import { useEffect, useState } from 'react'
import { listarProdutos } from '../services/produtoService'
import ProdutoCard from '../components/ProdutoCard'


export default function Home() {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
  const carregarProdutos = async () => {
    try {
      const response = await listarProdutos()
      setProdutos(response.data)
    } catch (error) {
      alert('Erro ao carregar produtos')
      console.error(error)
    }
  }

  carregarProdutos()
}, [])

   return (
    <div>
      <h2>Rações disponíveis</h2>
      {produtos.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id}>
              <strong>{produto.nome}</strong> - {produto.tipo} - {produto.peso}kg - R${produto.preco}
              <p>{produto.descricao}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
