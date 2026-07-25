import { createContext, useContext, useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { LANGS, TREES, isLang } from './content/index.js'

export { LANGS }

const Ctx = createContext(null)

// Provides the selected language's whole content tree. The language comes from
// the /:lang route segment, so /en /gu /hi each render their own content tree.
export function LanguageProvider({ children }) {
  const { lang } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const current = isLang(lang) ? lang : 'en'

  useEffect(() => {
    localStorage.setItem('lang', current)
    document.documentElement.lang = current
  }, [current])

  const setLang = (next) => {
    const rest = location.pathname.replace(/^\/(en|gu|hi)/, '') || ''
    navigate(`/${next}${rest}`)
  }

  return <Ctx.Provider value={{ lang: current, setLang, c: TREES[current] }}>{children}</Ctx.Provider>
}

export function useContent() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useContent must be used within LanguageProvider')
  return ctx
}
