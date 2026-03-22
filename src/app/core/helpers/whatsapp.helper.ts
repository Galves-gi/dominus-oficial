/* Função para gerar automaticamente encode do link dos cards produtos */

export function generateWhatsAppLink(product: any): string {
  const baseUrl = 'https://wa.me/5531984504703';

  const nomeCafe = product.title.replace('-', '').trim();

  const message =
    `Olá Dominus Cafés,
    Tenho interesse no ${nomeCafe} (${product.title_highlight?.trim()})
    ${product.type ? `Quero ${product.type}` : ''}

    Pode me passar as informações para finalizar a compra?`;

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}