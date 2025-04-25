import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Datasets from '@/pages/Datasets'
import Home from '@/pages/Home'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/datasets" element={<Datasets />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
