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
    image: '/images/woascht-wohl/IMG_20260819_152408.jpg',
    youtubeShort: 'u0-kPH1wsso',
    description: 'Woascht Wohl — Handcrafted Spirits. Traditionelle Schnapsbrennerei aus Dornbirn, Österreich.',
    customLayout: 'woascht-wohl',
  },
  {
    slug: 'grapheneos-phones',
    name: 'GrapheneOS Phones',
    nameTranslationKey: 'grapheneShop',
    city: 'Dornbirn',
    country: 'Österreich',
    image: '/images/grapheneos-short-thumb.jpg',
    youtubeShort: '4NPKSs7-kfI',
    description: 'Privacy Phones — GrapheneOS. Sichere Telefone mit GrapheneOS. Freiheit in deiner Tasche.',
    customLayout: 'grapheneos-phones',
  },
  {
    slug: 'dar-al-atlas',
    name: 'Dar Al-Atlas',
    nameTranslationKey: 'darAlAtlas',
    city: 'Chefchaouen',
    country: 'Morocco',
    image: '/images/chaouen/chaouen-2.jpg',
    youtubeShort: 'Ygi1cSGUez0',
    description: 'House of Atlas — rooted in the ancient medina, where leather and metalwork traditions span centuries.',
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
    slug: 'kasbah-khadija',
    name: 'Kasbah Khadija',
    nameTranslationKey: 'kasbahKhadija',
    city: 'Rabat',
    country: 'Morocco',
    image: '/images/chaouen/chaouen-4.jpg',
    description: 'A kasbah treasure house of woven textiles, ceramics, and hand-painted goods.',
    placeholder: true,
  },
  {
    slug: 'maison-du-vent',
    name: 'Maison du Vent',
    nameTranslationKey: 'maisonDuVent',
    city: 'Essaouira',
    country: 'Morocco',
    image: '/images/chaouen/chaouen-5.jpg',
    description: 'House of Wind — where the coastal breeze meets thuya wood carving and maritime crafts.',
    placeholder: true,
  },
];

export function getShopBySlug(slug) {
  return shops.find(s => s.slug === slug);
}