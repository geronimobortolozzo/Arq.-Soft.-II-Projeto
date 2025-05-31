import { Link } from 'react-router-dom'

export default function ProdutoCard({ produto }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: 8,
      padding: 16,
      marginBottom: 12
    }}>
      <h3>{produto.nome}</h3>
      <p>Tipo: {produto.tipo}</p>
      <p>Peso: {produto.peso} kg</p>
      <p>Preço: R$ {produto.preco.toFixed(2)}</p>
      <p>{produto.descricao}</p>
      <Link to={`/produto/${produto.id}`}>Ver detalhes</Link>
    </div>
  )
}
