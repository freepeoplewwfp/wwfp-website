// Shop data — easily replaceable when real shops are onboarded
// Each shop: slug (URL), name, city, country, image, description
// When real data arrives from Marrakesh trip, just update this file.

export const shops = [
  {
    slug: 'woascht-wohl',
    name: 'Woascht Wohl',
    nameTranslationKey: 'woaschtWohl',
    city: 'Dornbirn',
    country: 'Österreich',
    image: '/images/placeholder-schnaps.svg',
    description: 'Woascht Wohl — Handcrafted Spirits. Traditionelle Schnapsbrennerei aus Dornbirn, Österreich.',
    customLayout: 'woascht-wohl',
  },
  {
    slug: 'grapheneos-phones',
    name: 'GrapheneOS Phones',
    nameTranslationKey: 'grapheneShop',
    city: 'Dornbirn',
    country: 'Österreich',
    image: '/images/placeholder-phone.svg',
    description: 'Privacy Phones — GrapheneOS. Sichere Telefone mit GrapheneOS. Freiheit in deiner Tasche.',
    customLayout: 'grapheneos-phones',
  },
  {
    slug: 'souk-al-anouar',
    name: 'Souk Al-Anouar',
    nameTranslationKey: 'soukAlAnouar',
    city: 'Marrakesh',
    country: 'Morocco',
    image: '/images/chaouen/chaouen-1.jpg',
    description: 'The Market of Lights — a vibrant souk where colors, spices, and craftsmanship meet.',
  },
  {
    slug: 'dar-al-atlas',
    name: 'Dar Al-Atlas',
    nameTranslationKey: 'darAlAtlas',
    city: 'Chefchaouen',
    country: 'Morocco',
    image: '/images/chaouen/chaouen-2.jpg',
    video: '/videos/artisanat-du-moroc.mp4',
    description: 'House of Atlas — rooted in the ancient medina, where leather and metalwork traditions span centuries.',
  },
  {
    slug: 'atelier-casa',
    name: 'Atelier Casa',
    nameTranslationKey: 'atelierCasa',
    city: 'Casablanca',
    country: 'Morocco',
    image: '/images/chaouen/chaouen-3.jpg',
    description: 'A modern artisan workshop blending contemporary design with traditional Moroccan craft.',
  },
  {
    slug: 'kasbah-khadija',
    name: 'Kasbah Khadija',
    nameTranslationKey: 'kasbahKhadija',
    city: 'Rabat',
    country: 'Morocco',
    image: '/images/chaouen/chaouen-4.jpg',
    description: 'A kasbah treasure house of woven textiles, ceramics, and hand-painted goods.',
  },
  {
    slug: 'maison-du-vent',
    name: 'Maison du Vent',
    nameTranslationKey: 'maisonDuVent',
    city: 'Essaouira',
    country: 'Morocco',
    image: '/images/chaouen/chaouen-5.jpg',
    description: 'House of Wind — where the coastal breeze meets thuya wood carving and maritime crafts.',
  },
];

export function getShopBySlug(slug) {
  return shops.find(s => s.slug === slug);
}