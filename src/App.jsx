import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </div>
  )
}

export default App
