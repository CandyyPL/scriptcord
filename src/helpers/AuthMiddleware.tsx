import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext, TAuthContext } from '@/providers/AuthProvider.tsx'

const AuthMiddleware = ({ children }: { children: React.ReactNode }) => {
  const { session } = useContext<TAuthContext>(AuthContext)

  return <>{session?.user ? children : <Navigate to='/' />}</>
}

export default AuthMiddleware
