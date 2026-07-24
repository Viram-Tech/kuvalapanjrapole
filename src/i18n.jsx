import { createContext, useContext, useEffect, useState } from 'react'

// Supported languages. `dir` kept for future RTL; all three are LTR.
export const LANGS = [
  { code: 'en', short: 'EN', label: 'English' },
  { code: 'hi', short: 'हिं', label: 'हिन्दी' },
  { code: 'gu', short: 'ગુ', label: 'ગુજરાતી' },
]

// Translation dictionary. English is complete; Hindi/Gujarati cover the
// chrome + headline copy (accurate short strings). Anything missing in hi/gu
// falls back to English via t(), so nothing ever renders blank.
const DICT = {
  nav: {
    home: { en: 'Home', hi: 'मुख्य', gu: 'મુખ્ય' },
    sponsor: { en: 'Sponsor', hi: 'सहयोग', gu: 'સહયોગ' },
    seva: { en: 'Seva Report', hi: 'सेवा रिपोर्ट', gu: 'સેવા રિપોર્ટ' },
    about: { en: 'About', hi: 'परिचय', gu: 'પરિચય' },
    contact: { en: 'Contact', hi: 'संपर्क', gu: 'સંપર્ક' },
    donate: { en: 'Donate', hi: 'दान करें', gu: 'દાન કરો' },
  },
  hero: {
    eyebrow: {
      en: 'Kuvala · Banaskantha · Gujarat',
      hi: 'कुवाळा · बनासकांठा · गुजरात',
      gu: 'કુવાળા · બનાસકાંઠા · ગુજરાત',
    },
    title: {
      en: 'Every voiceless life deserves shelter.',
      hi: 'हर मूक जीवन आश्रय का हकदार है।',
      gu: 'દરેક મૂક જીવ આશરાને પાત્ર છે.',
    },
    body: {
      en: 'Shri Khodadhor Panjrapole rescues abandoned and slaughter-bound animals — giving over a thousand of them lifelong care, rooted in ahimsa.',
      hi: 'श्री खोडाधोर पांजरापोळ त्यागे हुए और कत्ल की ओर भेजे जा रहे पशुओं को बचाता है — अहिंसा की भावना से हज़ार से अधिक पशुओं को आजीवन सेवा देता है।',
      gu: 'શ્રી ખોડાધોર પાંજરાપોળ ત્યજાયેલા અને કતલ તરફ જતા પશુઓને બચાવે છે — અહિંસાના ભાવે હજારથી વધુ પશુઓને આજીવન સેવા આપે છે.',
    },
    donate: { en: 'Sponsor a Structure', hi: 'संरचना का सहयोग करें', gu: 'સંરચનાનું દાન કરો' },
    story: { en: 'Read our story', hi: 'हमारी कहानी', gu: 'અમારી કહાણી' },
  },
  common: {
    funded: { en: 'Funded', hi: 'पूर्ण', gu: 'પૂર્ણ' },
    available: { en: 'Available', hi: 'उपलब्ध', gu: 'ઉપલબ્ધ' },
  },
}

function lookup(path, lang) {
  const node = path.split('.').reduce((o, k) => (o ? o[k] : undefined), DICT)
  if (!node) return path
  return node[lang] ?? node.en ?? path
}

const Ctx = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = (path) => lookup(path, lang)
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>
}

export function useLang() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
