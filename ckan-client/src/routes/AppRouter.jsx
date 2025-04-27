import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '@/App'
import Home from '@/pages/Home'
import Datasets from '@/pages/Datasets'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="datasets" element={<Datasets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
