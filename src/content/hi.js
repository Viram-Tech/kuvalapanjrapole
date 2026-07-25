// -----------------------------------------------------------------------------
// Hindi content tree (overrides). Anything omitted falls back to English via the
// deep-merge in ./index.js. Generated Hindi — should be reviewed by a native
// speaker; long-form paragraphs are still English pending translation.
// -----------------------------------------------------------------------------
export default {
  code: 'hi',

  nav: {
    home: 'मुख्य',
    sponsor: 'सहयोग',
    seva: 'सेवा रिपोर्ट',
    about: 'परिचय',
    contact: 'संपर्क',
    donate: 'दान करें',
    menu: 'मेन्यू',
    explore: 'देखें',
    language: 'भाषा',
  },

  hero: {
    eyebrow: 'कुवाळा · बनासकांठा · गुजरात',
    mission: 'हम भेड़-बकरी-भैंस-गाय-बैल-रोझ, पक्षी और लूले-लंगड़े-अंधे निराधार पशु-पक्षियों को कत्लख़ाने जाने से बचाकर इस पांजरापोल में आश्रय देते हैं।',
    scroll: 'स्क्रॉल',
  },

  statLabels: ['आश्रित पशु', 'एकड़ ज़मीन', 'पशु शेड', 'जल स्रोत'],

  approach: { label: 'दृष्टिकोण' },

  shelter: { label: 'आश्रय', title: 'हम किन्हें आश्रय देते हैं' },

  sponsor: {
    title: 'आश्रय को एक नाम दें।',
    eyebrow: 'नामकरण अवसर',
    cta: 'सहयोग',
    funded: 'पूर्ण',
    available: 'उपलब्ध',
    structures: {
      godown: { name: 'चारा गोदाम' },
      gate: { name: 'मुख्य द्वार' },
      tabut: { name: 'ताबूत आश्रय' },
    },
  },

  seva: {
    title: 'हर रुपया कहाँ जाता है।',
    categories: { fodder: 'चारा', shelter: 'आश्रय', medical: 'चिकित्सा', staff: 'स्टाफ' },
    unitPrefix: 'राशि',
    note: 'सामूहिक, बिना नाम',
  },

  about: { title: 'करुणा की परंपरा।', gallery: 'गैलरी' },

  contact: {
    title: 'पंजीकृत, पारदर्शी, सुलभ।',
    trust: 'ट्रस्ट',
    reg: '80G पंजीकरण',
    address: 'पता',
    phone: 'फ़ोन',
    bankTitle: 'बैंक / दान',
    acName: 'खाता नाम',
    bank: 'बैंक',
    acNo: 'खाता सं.',
    ifsc: 'IFSC',
    reps: 'न्यासी एवं प्रतिनिधि',
  },

  footer: { tagline: 'करुणा से पशुसेवा · अहिंसा परमो धर्म' },

  qr: { directions: 'दिशा', call: 'कॉल', sponsorCta: 'संरचना का सहयोग करें' },
}
