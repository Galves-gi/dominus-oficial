import { SITE } from '../config/site.config';
import { Product } from '../model/card-product-home.model';

const clean = (s: string) => s.replace(/\s+/g, ' ').trim();

const parsePrice = (spec: string): string | undefined => {
  const m = spec.match(/(\d{1,3}(?:\.\d{3})*,\d{2})/);
  return m ? m[1].replace(/\./g, '').replace(',', '.') : undefined;
};

const absolute = (path: string) => `${SITE.url}/${path.replace(/^\//, '')}`;

const toProductJsonLd = (p: Product, position: number) => {
  const price = parsePrice(p.specification);
  return {
    '@type': 'ListItem',
    position,
    item: {
      '@type': 'Product',
      sku: `dominus-${p.id}`,
      name: clean(`${p.title} ${p.title_highlight} ${p.type}`),
      description: clean(`${p.description} ${p.description_highlight}`),
      image: absolute(p.image),
      brand: { '@type': 'Brand', name: SITE.name },
      ...(price && {
        offers: {
          '@type': 'Offer',
          url: `${SITE.url}/#catalogo`,
          price,
          priceCurrency: 'BRL'
        },
      }),
    },
  };
};

export const organizationJsonLd = {
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo.svg`,
  description:
    'Cafés especiais e premiados do Sítio Terra Boa, em Caratinga (MG), produzidos com agricultura familiar e sustentabilidade.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Caratinga',
    addressRegion: 'MG',
    addressCountry: 'BR',
  },
  sameAs: ['https://www.instagram.com/dominuscafes/', 'https://www.facebook.com/share/1BE3Cu4C9G/'],
   "telephone": "+55 31 98450-4703",
};

export const buildHomeJsonLd = (products: readonly Product[]) => ({
  '@context': 'https://schema.org',
  '@graph': [
    organizationJsonLd,
    {
      '@type': 'ItemList',
      name: 'Catálogo de Cafés Especiais',
      itemListElement: products.map((p, i) => toProductJsonLd(p, i + 1)),
    },
  ],
});