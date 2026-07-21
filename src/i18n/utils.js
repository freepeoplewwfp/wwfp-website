import { languages, defaultLang } from '../i18n/config.js';
import { en } from '../i18n/en.js';
import { de } from '../i18n/de.js';
import { fr } from '../i18n/fr.js';
import { es } from '../i18n/es.js';
import { it } from '../i18n/it.js';
import { pl } from '../i18n/pl.js';
import { ro } from '../i18n/ro.js';
import { nl } from '../i18n/nl.js';
import { pt } from '../i18n/pt.js';

const translations = { en, de, fr, es, it, pl, ro, nl, pt };

export async function getStaticPaths() {
  const langCodes = Object.keys(languages);
  return langCodes.map(code => ({
    params: { lang: code },
  }));
}

export function getLangFromUrl(url) {
  const parts = url.pathname.split('/').filter(Boolean);
  if (parts[0] === 'wwfp-website' && parts[1]) {
    const lang = parts[1];
    if (languages[lang]) return lang;
  }
  return defaultLang;
}

export function getTranslations(lang) {
  return translations[lang] || translations[defaultLang];
}