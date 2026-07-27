// -----------------------------------------------------------------------------
// English content tree. Each language is its OWN file (see gu.js, hi.js) so the
// copy can be authored independently per language, not mechanically mirrored.
// Non-translatable data (images, amounts, stat values, phone/bank/reg numbers,
// chart figures, map embed) lives in ../data/site.js, keyed the same way.
// -----------------------------------------------------------------------------
export default {
  code: 'en',

  nav: {
    home: 'Home',
    sponsor: 'Sponsor',
    seva: 'Seva Report',
    about: 'About',
    contact: 'Contact',
    donate: 'Donate',
    menu: 'Menu',
    explore: 'Explore',
    language: 'Language',
  },

  hero: {
    eyebrow: 'Kuvala · Banaskantha · Gujarat',
    mission:
      'Shri Khodadhor Panjrapole rescues abandoned and slaughter-bound animals — giving over a thousand of them lifelong care, rooted in ahimsa.',
    scroll: 'Scroll',
  },

  // Labels align 1:1 with data/site.js STATS (values come from there).
  statLabels: ['Animals sheltered', 'Acres of land', 'Animal sheds', 'Water sources'],

  approach: {
    label: 'Approach',
    items: [
      { title: 'Rescue & shelter', body: 'Animals bound for slaughter or abandoned on the road are brought in and given a permanent home — no matter their condition.' },
      { title: 'Veterinary care', body: 'An on-site hospital treats the sick, the injured, and the lame — the animals this sanctuary is named for.' },
      { title: 'Fodder & water', body: 'Year-round hay and fodder, and 20+ water sources, keep every trough full through the long dry months.' },
      { title: 'Dignified last rites', body: 'Care does not end when a life does — the tabut shelter gives animals dignity in their final days and rites.' },
    ],
  },

  shelter: {
    label: 'Shelter',
    title: 'What we shelter',
    body: 'Not one kind of animal, but every kind that needs refuge. Cows, oxen, buffalo calves, goats, sheep, nilgai and birds — alongside the lame, blind and stray that no one else will keep — are all taken in and cared for here.',
  },

  sponsor: {
    title: 'Give a name to shelter.',
    intro: 'Three permanent structures anchor the sanctuary. Endow one at ₹5,00,000 — your family or guru’s name carried on it in perpetuity.',
    eyebrow: 'Naming opportunity',
    cta: 'Sponsor',
    funded: 'Funded',
    available: 'Available',
    structures: {
      godown: { name: 'Fodder Godown', blurb: 'Sponsor the warehouse that stores the sanctuary’s year-round supply of hay and fodder — the difference between a full and an empty trough through the dry months.' },
      gate: { name: 'Main Gate', blurb: 'Name the entrance through which every rescued animal first arrives — the threshold between the road to slaughter and a life of shelter.' },
      tabut: { name: 'Tabut Shelter', blurb: 'Support the covered structure that gives animals dignity in their final days and rites — care that does not end when a life does.' },
    },
  },

  seva: {
    title: 'Where every rupee goes.',
    intro: 'An aggregate, monthly view of the trust’s spending — no names, no spreadsheet dump. Fodder is the largest and most seasonal cost; medical and shelter carry the rest of daily care.',
    categories: { fodder: 'Fodder', shelter: 'Shelter', medical: 'Medical', staff: 'Staff' },
    unitPrefix: 'Amounts in',
    note: 'aggregate, no names',
  },

  about: {
    title: 'A lineage of compassion.',
    lineage:
      'Shri Khodadhor Panjrapole rises from the soil of Kuvala — the birthplace connection of Pu. Acharya Bhagwant Shri Surendrasurishwarji M.S. — and grows under the divine blessing of P. Pu. Acharya Bhagwant Shri Ramsurishwarji M.S. (Dehlawala).',
    land:
      'On roughly nine acres in Bhabhar taluka, the sanctuary shelters over a thousand animals once destined for slaughter. What began as a refuge for a few is today a working panjrapole — hospital, sheds, fodder stores, water and staff — run by the Shri Kuvala Shvetambar Murtipujak Jain Sangh.',
    sangh: 'Run by the Shri Kuvala Shvetambar Murtipujak Jain Sangh, in service of ahimsa — non-violence toward every living being.',
    gallery: 'Gallery',
  },

  contact: {
    title: 'Registered, transparent, reachable.',
    trust: 'Trust',
    reg: '80G Registration',
    address: 'Address',
    phone: 'Phone',
    bankTitle: 'Bank / Donation',
    bankNote: 'A dedicated giving flow is being finalised. For now, donations by bank transfer:',
    acName: 'A/c name',
    bank: 'Bank',
    acNo: 'A/c no.',
    ifsc: 'IFSC',
    reps: 'Trustees & representatives',
  },

  footer: {
    blurbSuffix: 'a Jain animal sanctuary in Kuvala, Bhabhar, Banaskantha. 80G tax-exempt registered trust',
    mapLink: 'Shri Khodadhor Panjrapole, Kuvala — view on Google Maps',
    tagline: 'Serving animals with compassion · ahimsa parmo dharma',
  },

  qr: {
    directions: 'Directions',
    call: 'Call',
    sponsorCta: 'Sponsor a Structure',
  },
}
