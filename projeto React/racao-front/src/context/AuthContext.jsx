import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiUsuarios } from '../services/api'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null)
  const navigate = useNavigate()

  const login = async (email, senha) => {
    try {
      const response = await apiUsuarios.post('/usuarios/login', { email, senha })
      setUsuario(response.data)
      navigate('/')
    } catch (error) {
      alert('Login falhou. Verifique o email e a senha.')
    }
  }

  const logout = () => {
    setUsuario(null)
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
