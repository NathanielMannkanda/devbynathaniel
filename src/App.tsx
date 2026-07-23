import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import RealHomePage from './pages/RealHomePage'
import MatrixChoice from './pages/MatrixChoice'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/redpill' element={<RealHomePage />} />
        <Route path='/matrix' element={<MatrixChoice />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
