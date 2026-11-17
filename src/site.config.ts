// Everything you are likely to want to change in one place.
export const site = {
  name: 'Amy Martin',
  tagline: 'photographs on film',
  description:
    'A picture book of film photographs by Amy Martin — little chapters, one roll at a time.',
  volume: 'A Picture Book · Volume One',

  links: {
    stocksy: 'https://www.stocksy.com/ameslady',
    instagram: '', // e.g. 'https://www.instagram.com/yourhandle/' — hidden while empty
  },

  // The little hanging tag on the cover photo.
  hero: {
    alt: 'Small white wildflowers glowing against deep green leaves',
    title: 'Queen Anne’s Lace',
    note: 'Harman Phoenix 200 · Pentax K1000',
  },

  about: {
    greeting: 'Hello, I’m Amy.',
    bio: '[Your story in two or three warm sentences — how you came to film, what you love to photograph, what keeps you loading another roll.]',
    carrying: 'usually carrying: my Nikon FE & a roll of Portra 400',
  },

  // Contact postcard. GitHub Pages has no server, so letters are delivered by
  // Formspree (free tier). Create a form at https://formspree.io, then paste
  // its endpoint here, e.g. 'https://formspree.io/f/abcdwxyz'.
  formEndpoint: '',
};

/** Prefix a site-relative path with the configured base (needed on GitHub Pages). */
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return clean ? `${base}/${clean}` : `${base}/`;
}

const ROMAN: [number, string][] = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'],
  [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
];
export function roman(n: number) {
  let out = '';
  for (const [v, s] of ROMAN) while (n >= v) { out += s; n -= v; }
  return out;
}

const WORDS = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'];
export function numberWord(n: number) {
  return WORDS[n] ?? String(n);
}
