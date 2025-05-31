import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiProdutos } from '../services/api'

export default function DetalheProduto() {
  const { id } = useParams()
  const [produto, setProduto] = useState(null)
  const [quantidade, setQuantidade] = useState(1)

  useEffect(() => {
    async function buscarProduto() {
      try {
        const response = await apiProdutos.get(`/produtos/${id}`)
        setProduto(response.data)
      } catch (error) {
        alert('Erro ao carregar produto')
      }
    }

    buscarProduto()
  }, [id])

  const adicionarAoCarrinho = () => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho')) || []

    const itemExistente = carrinhoSalvo.find(item => item.id === produto.id)

    let novoCarrinho
    if (itemExistente) {
      novoCarrinho = carrinhoSalvo.map(item =>
        item.id === produto.id
          ? { ...item, quantidade: item.quantidade + quantidade }
          : item
      )
    } else {
      novoCarrinho = [...carrinhoSalvo, { ...produto, quantidade }]
    }

    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho))
    alert('Produto adicionado ao carrinho!')
  }

  if (!produto) return <p>Carregando...</p>

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h2>{produto.nome}</h2>
      <p><strong>Tipo:</strong> {produto.tipo}</p>
      <p><strong>Descrição:</strong> {produto.descricao}</p>
      <p><strong>Peso:</strong> {produto.peso} kg</p>
      <p><strong>Preço:</strong> R$ {produto.preco.toFixed(2)}</p>

      <div>
        <label>Quantidade:</label>
        <input
          type="number"
          min={1}
          value={quantidade}
          onChange={e => setQuantidade(parseInt(e.target.value))}
          style={{ width: 60, marginLeft: 10 }}
        />
      </div>

      <button onClick={adicionarAoCarrinho} style={{ marginTop: 10 }}>
        Adicionar ao Carrinho
      </button>
    </div>
  )
}
