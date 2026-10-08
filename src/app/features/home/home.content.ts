export interface HomeContent {
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
  readonly h1: {
    readonly prefix: string;
    readonly highlight: string;
  };
  readonly banner: {
    readonly alt: string;
    readonly cta: string;
    readonly ctaAriaLabel: string;
  };
}

export const HOME_CONTENT: HomeContent = {
  seo: {

    title: 'Cafés Especiais',

    description:
      'Cafés especiais de Caratinga (MG): Arara Campeão, Arara Moca, Chocomilk, Fruit Catucaí, Mine Lab Nanolote e Dripp Coffee. Compre pelo WhatsApp.',
  },
  h1: {
    prefix: 'Conheça Nosso Catálogo de',
    highlight: 'Cafés Especiais:',
  },
  banner: {
    alt: 'Produzir, Educar e Servir é o trinômio que nos identifica. Somos a Cida e Romildo,um casal com raízes na educação e no meio ambiente, unidos por uma paixão.',
    cta: 'Saiba Mais',
    ctaAriaLabel: 'Saiba mais sobre a história da Cida e Romildo',
  },
};