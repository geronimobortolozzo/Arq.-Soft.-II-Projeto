import { useState } from 'react'
import { apiUsuarios } from '../services/api'
import { useNavigate, Link } from 'react-router-dom'

export default function Cadastro() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await apiUsuarios.post('/usuarios/cadastro', { nome, email, senha })
      alert('Cadastro realizado com sucesso! Faça login.')
      navigate('/login')
    } catch (error) {
      alert('Erro ao cadastrar. Verifique os dados e tente novamente.')
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label><br />
          <input
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label><br />
          <input
            type="password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      <p>Já tem uma conta? <Link to="/login">Faça login</Link></p>
    </div>
  )
}
