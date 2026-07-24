import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import QRLanding from './pages/QRLanding.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Separate stripped-down page for on-site QR scans */}
      <Route path="/scan" element={<QRLanding />} />
      <Route path="/qr" element={<QRLanding />} />
    </Routes>
  )
}
