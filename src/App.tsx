import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from '@/views/Auth/Auth.tsx'
import Dashboard from '@/views/Dashboard/Dashboard.tsx'
import AuthMiddleware from '@/helpers/AuthMiddleware'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Auth />}
        />
        <Route
          path='/dashboard'
          element={
            <AuthMiddleware>
              <Dashboard />
            </AuthMiddleware>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
