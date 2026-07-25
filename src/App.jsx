import { Routes, Route, Navigate, Outlet, useParams } from 'react-router-dom'
import { LanguageProvider } from './i18n.jsx'
import { isLang } from './content/index.js'
import Home from './pages/Home.jsx'
import QRLanding from './pages/QRLanding.jsx'

function defaultLang() {
  try {
    return localStorage.getItem('lang') || 'en'
  } catch {
    return 'en'
  }
}

// Wraps the /:lang routes with the content provider for that language.
function LangShell() {
  const { lang } = useParams()
  if (!isLang(lang)) return <Navigate to="/en" replace />
  return (
    <LanguageProvider>
      <Outlet />
    </LanguageProvider>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${defaultLang()}`} replace />} />
      <Route path="/scan" element={<Navigate to={`/${defaultLang()}/scan`} replace />} />
      <Route path="/qr" element={<Navigate to={`/${defaultLang()}/qr`} replace />} />
      <Route path="/:lang" element={<LangShell />}>
        <Route index element={<Home />} />
        <Route path="scan" element={<QRLanding />} />
        <Route path="qr" element={<QRLanding />} />
      </Route>
      <Route path="*" element={<Navigate to={`/${defaultLang()}`} replace />} />
    </Routes>
  )
}
