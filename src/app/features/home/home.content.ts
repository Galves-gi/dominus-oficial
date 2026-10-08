export interface Feature { icon: string; title: string; text: string; }

export const HOME_CONTENT = {
  hero: {
    title: 'Título principal com a palavra-chave',
    subtitle: 'Subtítulo que explica o valor em uma frase.',
    cta: { label: 'Fale conosco', href: '/sobre' },
  },
  features: [
    { icon: '⚡', title: 'Rápido', text: 'Texto curto.' },
    { icon: '🔒', title: 'Seguro', text: 'Texto curto.' },
    { icon: '📈', title: 'Escalável', text: 'Texto curto.' },
  ] satisfies Feature[],
};