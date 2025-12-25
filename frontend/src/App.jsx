import { Navigate, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import ProtectedRoute from './components/ProtectedRoute'
import LoginPage from './pages/LoginPage'

import './App.css'
import HomePage from './pages/HomePage'
import TodoDetail from './pages/TodoDetail'

function App() {

  return (
    <Routes>

      <Route path='/signup' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/dashboard' element={ <ProtectedRoute> <HomePage /> </ProtectedRoute>} />
      <Route path='/' element={ <Navigate to={'/dashboard'} /> } />
      <Route path='/detail/:id' element={ <ProtectedRoute> <TodoDetail /> </ProtectedRoute>} />

    </Routes>
  )
}

export default App