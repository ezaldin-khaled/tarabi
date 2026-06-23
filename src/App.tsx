import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CoveragePage from './pages/CoveragePage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="coverage" element={<CoveragePage />} />
      </Route>
    </Routes>
  )
}
