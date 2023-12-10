import { useContext } from 'react'
import { Wrapper } from '@/views/Dashboard/Dashboard.styles.ts'
import { logout } from '@/db/auth.ts'
import { AuthContext, TAuthContext } from '@/providers/AuthProvider.tsx'

const Dashboard = () => {
  const { session, setSession } = useContext<TAuthContext>(AuthContext)

  const handleLogout = () => {
    sessionStorage.removeItem('session')
    logout()
    setSession(null)
  }

  return (
    <Wrapper>
      <span>Logged as {session?.user.email}</span>
      <button onClick={() => handleLogout()}>LOGOUT</button>
    </Wrapper>
  )
}

export default Dashboard
