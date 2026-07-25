import en from './en.js'
import guOverrides from './gu.js'
import hiOverrides from './hi.js'

// Deep-merge language overrides onto the English base so any untranslated field
// gracefully falls back to English. Arrays are replaced wholesale (translate the
// whole array or none).
function deepMerge(base, over) {
  if (over === undefined) return base
  if (Array.isArray(base)) return Array.isArray(over) ? over : base
  if (base && typeof base === 'object') {
    const out = { ...base }
    for (const k of Object.keys(base)) {
      if (over && k in over) out[k] = deepMerge(base[k], over[k])
    }
    return out
  }
  return over
}

export const TREES = {
  en,
  gu: deepMerge(en, guOverrides),
  hi: deepMerge(en, hiOverrides),
}

export const LANGS = [
  { code: 'en', short: 'EN', label: 'English' },
  { code: 'hi', short: 'हिं', label: 'हिन्दी' },
  { code: 'gu', short: 'ગુ', label: 'ગુજરાતી' },
]

export const isLang = (v) => v === 'en' || v === 'gu' || v === 'hi'
