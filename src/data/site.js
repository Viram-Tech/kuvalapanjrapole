// -----------------------------------------------------------------------------
// Central site content — real data from kuvalapanjrapole.com.
// Non-devs can edit these values; the sections read from here.
// -----------------------------------------------------------------------------

export const ORG = {
  nameEn: 'Shri Khodadhor Panjrapole',
  brand: 'Khodadhor Panjrapole', // display wordmark (no honorific)
  nameGu: 'શ્રી ખોડાધોર પાંજરાપોળ',
  place: 'Kuvala, Bhabhar, Banaskantha, North Gujarat',
  sangh: 'Shri Phuvala Shvetambar Murtipujak Jain Sangh',
}

export const STATS = [
  { value: '1,000+', label: 'Animals sheltered' },
  { value: '9', label: 'Acres of land' },
  { value: '45+', label: 'Animal sheds' },
  { value: '20+', label: 'Water sources' },
]

// Animals rescued (from the original site's Gujarati line).
export const ANIMALS = 'Cows · Oxen · Buffalo calves · Goats · Sheep · Nilgai · Birds · and disabled, blind and stray animals'

// The three ₹5,00,000 naming / sponsorship structures.
export const STRUCTURES = [
  {
    id: 'godown',
    name: 'Fodder Godown',
    amount: '₹5,00,000',
    image: '/images/straw.jpg',
    status: 'available',
    blurb:
      'Sponsor the warehouse that stores the sanctuary’s year-round supply of hay and fodder — the difference between a full and an empty trough through the dry months.',
  },
  {
    id: 'gate',
    name: 'Main Gate',
    amount: '₹5,00,000',
    image: '/images/home.jpg',
    status: 'available',
    blurb:
      'Name the entrance through which every rescued animal first arrives — the threshold between the road to slaughter and a life of shelter.',
  },
  {
    id: 'tabut',
    name: 'Tabut Shelter',
    amount: '₹5,00,000',
    image: '/images/shade.jpg',
    status: 'available',
    blurb:
      'Support the covered structure that gives animals dignity in their final days and rites — care that does not end when a life does.',
  },
]

// Seva Report — monthly spend by category, in ₹ lakh. Aggregate, no names.
// (Representative figures — replace with the trust’s actual monthly totals.)
export const SEVA = {
  unit: '₹ lakh',
  // Indigo tonal ramp (deep → light) matching the site palette; the stacked
  // segments read by tone + the legend.
  categories: [
    { key: 'fodder', label: 'Fodder', color: '#1f2b7b' },
    { key: 'shelter', label: 'Shelter', color: '#415094' },
    { key: 'medical', label: 'Medical', color: '#7581c0' },
    { key: 'staff', label: 'Staff', color: '#aab2dd' },
  ],
  months: [
    { month: 'Feb', fodder: 3.4, shelter: 1.1, medical: 0.8, staff: 1.2 },
    { month: 'Mar', fodder: 3.8, shelter: 1.0, medical: 1.1, staff: 1.2 },
    { month: 'Apr', fodder: 4.6, shelter: 1.4, medical: 1.0, staff: 1.3 },
    { month: 'May', fodder: 5.2, shelter: 1.3, medical: 1.4, staff: 1.3 },
    { month: 'Jun', fodder: 4.9, shelter: 1.6, medical: 1.2, staff: 1.4 },
    { month: 'Jul', fodder: 5.6, shelter: 1.8, medical: 1.5, staff: 1.4 },
  ],
}

// About — lineage & land history (English source; translate per language later).
export const ABOUT = {
  lineage:
    'Shri Khodadhor Panjrapole rises from the soil of Kuvala — the birthplace connection of Pu. Acharya Bhagwant Shri Surendrasurishwarji M.S. — and grows under the divine blessing of P. Pu. Acharya Bhagwant Shri Ramsurishwarji M.S. (Dehlawala).',
  land:
    'On roughly nine acres in Bhabhar taluka, the sanctuary shelters over a thousand animals once destined for slaughter. What began as a refuge for a few is today a working panjrapole — hospital, sheds, fodder stores, water and staff — run by the Shri Phuvala Shvetambar Murtipujak Jain Sangh.',
}

export const GALLERY = [
  { src: '/images/xabout.jpg', caption: 'Gir cows resting in the shade' },
  { src: '/images/xservices-img1.jpg', caption: 'Rescued cattle at the sanctuary' },
  { src: '/images/hospital.jpg', caption: 'On-site animal hospital' },
  { src: '/images/bakrishade.jpg', caption: 'Goat & sheep shed' },
  { src: '/images/watertank.jpg', caption: 'Water storage tank' },
  { src: '/images/chabutra.jpg', caption: 'Chabutro — bird feeding tower' },
]

export const TRUST = {
  reg80G: 'DIT(E)/80G(5)/113/0708',
  addressEn: 'Kuvala Post, Bhabhar Taluka, Banaskantha District, North Gujarat — 385320',
  addressGu: 'મુ.પો. કુવાળા, તા. ભાભર, જિ. બનાસકાંઠા, ઉ. ગુજરાત — ૩૮૫૩૨૦',
  primaryPhones: ['9979787262', '9586588261'],
  bank: {
    name: 'SHRI KHODADHOR PANJRAPOLE KUVALA',
    bank: 'State Bank of India',
    account: '10895011054',
    ifsc: 'SBIN0002632',
  },
  representatives: [
    { name: 'Himatlal Hiralal Loladiya', phone: '9426948959' },
    { name: 'Sagar Shah', phone: '7977751403' },
    { name: 'Shashikantbhai B. Roliya', phone: '9820374771' },
    { name: 'Maheshbhai Fozalal Seth', phone: '9323136343' },
    { name: 'Rameshbhai Bhogilal Seth', phone: '9820654202' },
    { name: 'Indravdan Ishwarlal Loladiya', phone: '9821383803' },
  ],
}
