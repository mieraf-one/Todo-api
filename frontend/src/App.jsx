import RegisterPage from './pages/RegisterPage'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/signup' element={<RegisterPage />} />
    </Routes>
  )
}

export default App
