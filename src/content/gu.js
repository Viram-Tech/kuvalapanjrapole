// -----------------------------------------------------------------------------
// Gujarati content tree (overrides). Anything omitted falls back to English via
// the deep-merge in ./index.js, so this file can be extended independently.
// TODO (native review): the long-form paragraphs (approach bodies, sponsor
// blurbs, seva.intro, about.lineage/land, footer blurb) are still English —
// author them here in Gujarati.
// -----------------------------------------------------------------------------
export default {
  code: 'gu',

  nav: {
    home: 'મુખ્ય',
    sponsor: 'સહયોગ',
    seva: 'સેવા રિપોર્ટ',
    about: 'પરિચય',
    contact: 'સંપર્ક',
    donate: 'દાન કરો',
    menu: 'મેનૂ',
    explore: 'શોધો',
    language: 'ભાષા',
  },

  hero: {
    eyebrow: 'કુવાળા · બનાસકાંઠા · ગુજરાત',
    // Authentic mission line from the sanctuary's own site.
    mission: 'અમે ઘેંટા-બકરા-પાડા-ગાય-બળદ-રોઝ પક્ષી અને લુલા-લંગડા-આંધળા નીરાધાર પશુ-પક્ષીઓને કતલખાને જતા બચાવીને આ પાંજરાપોળમાં સમાવી લઈએ છીએ.',
    scroll: 'સ્ક્રોલ',
  },

  statLabels: ['આશ્રિત પશુઓ', 'એકર જમીન', 'પશુ શેડ', 'પાણીના સ્રોત'],

  approach: { label: 'અભિગમ' },

  shelter: { label: 'આશ્રય', title: 'અમે કોને આશ્રય આપીએ છીએ' },

  sponsor: {
    title: 'આશરાને એક નામ આપો.',
    eyebrow: 'નામકરણ તક',
    cta: 'સહયોગ',
    funded: 'પૂર્ણ',
    available: 'ઉપલબ્ધ',
    structures: {
      godown: { name: 'ઘાસચારા ગોડાઉન' },
      gate: { name: 'મુખ્ય દરવાજો' },
      tabut: { name: 'તાબૂત આશ્રય' },
    },
  },

  seva: {
    title: 'દરેક રૂપિયો ક્યાં જાય છે.',
    categories: { fodder: 'ઘાસચારો', shelter: 'આશ્રય', medical: 'સારવાર', staff: 'સ્ટાફ' },
    unitPrefix: 'રકમ',
    note: 'સામૂહિક, નામ વગર',
  },

  about: { title: 'કરુણાનો વારસો.', gallery: 'ગૅલેરી' },

  contact: {
    title: 'નોંધાયેલ, પારદર્શક, સંપર્કક્ષમ.',
    trust: 'ટ્રસ્ટ',
    reg: '80G નોંધણી',
    address: 'સરનામું',
    phone: 'ફોન',
    bankTitle: 'બેંક / દાન',
    acName: 'ખાતાનું નામ',
    bank: 'બેંક',
    acNo: 'ખાતા નં.',
    ifsc: 'IFSC',
    reps: 'ટ્રસ્ટીઓ અને પ્રતિનિધિઓ',
  },

  footer: { tagline: 'કરુણાથી પશુસેવા · અહિંસા પરમો ધર્મ' },

  qr: { directions: 'દિશા', call: 'કૉલ', sponsorCta: 'સંરચનાનું દાન કરો' },
}
