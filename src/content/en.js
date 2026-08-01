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
    facilities: 'Facilities',
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
    quote: 'Your offering of wealth will serve the voiceless souls.',
    intro: 'Three permanent structures anchor the sanctuary. Endow one at ₹5,00,000 — your family or guru’s name carried on it in perpetuity.',
    eyebrow: 'Naming opportunity',
    cta: 'Sponsor',
    funded: 'Funded',
    available: 'Available',
    heading: 'Your offering of wealth will serve the voiceless souls.',
    tiers: [
      'Godown compound',
      'Tabut (last-rites) shelter',
      'Borewell water tank in the field',
      'Fodder godown',
      'Cattle-yard gate',
      'Room in the field house',
      'Name on a fodder manger',
      'Name on a water trough',
      'Capsule scheme',
      'Wall plaque',
      'Permanent tithi (memorial day)',
      'One tractor of grass',
      'Grain for birds',
      'Rotla (bread) for dogs',
    ],
    invite: [
      'We warmly invite you to visit the sanctuary, remember the voiceless animals, and become a partner in this work of compassion. Please send your contribution by demand draft in the name of “શ્રી કુવાળા ખોડાઢોર પાંજરાપોળ”.',
      'For more information, please contact the numbers listed below.',
    ],
    tax80g: 'Donations to the sanctuary are tax-exempt under Section 80G.',
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
    branch: 'Branch',
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

  facilities: {
    title: 'Our Sanctuary Facilities & Services',
    quote: 'Serving animals and birds... A humble request to listen to the silent longing of their hearts, to stand by the mute, voiceless creatures and comfort their souls.',
    office: 'Office Room',
    hospital: 'Animal Hospital',
    staff: 'Staff Room',
    weigh: 'Weigh Bridge & Loading Area',
    home: 'Animal House',
    chabutra: 'Chabutro (Bird Tower)',
    godown: 'Fodder Godown',
    shed: 'Cattle Sheds',
    wado: 'Goat & Sheep Shed',
    troughs: 'Water Troughs',
    bore: 'Water Borewell',
  },

  appeal: {
    title: 'They Need Your Help',
    body1: 'Since our panjrapole is near the border, we rescue sheep, goats, buffalo calves, cows, oxen, nilgai, birds and disabled, blind, helpless animals and birds destined for slaughter, and shelter them in this panjrapole. The flow of these voiceless animals is constantly increasing. Currently, we are maintaining about 1000 animals.',
    body2: 'To meet these expenses, there is a constant need for assistance from generous people like you, trustees, and members.',
    joinTitle: 'Join Hands With Us',
    joinBody: 'We humbly request you to make a financial contribution to this organization and become a partner in maintaining helpless animals. We also humbly request Acharya Bhagwants, Sadhus, and Shramani Vrunds that with your holy inspiration, you speed up this life-saving work of ours.',
    salutation: 'Respected dharma-loving Shri .................................... — Jain Sangh / Esteemed Trustees,',
    greeting: 'Jai Jinendra from શ્રી ખોડાઢોર પાંજરાપોળ, Kuvala — run by શ્રી કુવાળા જૈન સંઘ.',
    paras: [
      'We respectfully wish to inform you that Kuvala village — in Bhabhar taluka of Banaskantha district, North Gujarat — is the birthplace of the incomparably gifted પૂ.આ.ભ.શ્રી સુરેન્દ્રસૂરીશ્વરજી મ.સા., and has been sanctified by the auspicious blessings of the Tapagachhadhipati આ.ભ.શ્રી રામસૂરીશ્વરજી મ.સા. (ડહેલાવાળા).',
      'Our panjrapole was started with the inspiration of પૂ.આ.ભ.શ્રી સુરેન્દ્રસૂરીશ્વરજી મ.સા., and today spans roughly 9 vigha of land, developed under the divine blessings of પ.પૂ.આ.ભ.શ્રી સુરેન્દ્રસૂરીશ્વરજી મ.સા. (ડહેલાવાળા). It has 48 sheds, drinking-water troughs, feeding mangers, a fodder godown, a separate shed for sick cattle, goat sheds, water tanks, borewells, a tractor and a weighbridge, along with a hospital, office room, staff room and a fodder weighing scale — and, beyond all that, a chabutro (dovecote) for pigeons, a bird house, and CCTV cameras installed throughout the entire panjrapole.',
      'As our panjrapole is near the border, we rescue cattle, goats, buffalo calves, cows, buffaloes, nilgai, and lame, crippled and blind helpless animals and birds from being taken to slaughter, and give them shelter here. This flow is continuously increasing.',
      'At present nearly 1,200 animals are being cared for. To meet the expenses, we constantly need the support of generous-hearted people, trustees and members like you — and pray that, with your inspiration, this compassionate work of ours is carried forward with ever greater momentum.',
    ],
  },

  popup: {
    eyebrow: '2024 · Annual Report',
    title: 'The 2024 Seva Report is here.',
    body: 'A year of shelter, fodder and care — see how your support kept over a thousand animals fed, treated and safe.',
    open: 'Read the full report',
    dismiss: 'Maybe later',
    close: 'Close',
  },
}
