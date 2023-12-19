import { useContext, useState } from 'react'
import { Main, Sidebar, Wrapper } from '@/views/Dashboard/Dashboard.styles.ts'
import { logout } from '@/db/auth.ts'
import { AuthContext, TAuthContext } from '@/providers/AuthProvider.tsx'

const SidebarContent = {
  SERVERS: 'servers',
  FRIENDS: 'friends',
}

const Dashboard = () => {
  const { session, setSession } = useContext<TAuthContext>(AuthContext)

  const [sidebarContent, setSidebarContent] = useState(SidebarContent.SERVERS)

  const handleLogout = () => {
    sessionStorage.removeItem('session')
    logout()
    setSession(null)
  }

  return (
    <Wrapper>
      <Sidebar>
        <div className='content-select'>
          <button
            className={`${sidebarContent == SidebarContent.SERVERS ? 'active' : null}`}
            onClick={() => setSidebarContent(SidebarContent.SERVERS)}>
            SERVERS
          </button>
          <button
            className={`${sidebarContent == SidebarContent.FRIENDS ? 'active' : null}`}
            onClick={() => setSidebarContent(SidebarContent.FRIENDS)}>
            FRIENDS
          </button>
        </div>
        <div className='content'></div>
        <div className='panel'>
          <span>Username: {session?.user.user_metadata.username}</span>
          <button onClick={() => handleLogout()}>LOGOUT</button>
        </div>
      </Sidebar>
      <Main></Main>
    </Wrapper>
  )
}

export default Dashboard
