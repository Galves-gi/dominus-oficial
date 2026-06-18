/* Função para gerar automaticamente encode do link dos cards produtos */

export function generateWhatsAppLink(product: any): string {
  const baseUrl = 'https://wa.me/5531984504703';

  const nomeCafe = product.title.replace('-', '').trim();

  const peso = product.specification?.split(' - ')[0] || '';
  const valor = product.specification?.split(' - ')[1] || '';

  const message =
  `Olá, Dominus Cafés!  

  Tenho interesse no produto abaixo:

  ${nomeCafe} 
  ${product.type ? ` - ${product.type}` : ''}
  ${product.title_highlight ? ` - ${product.title_highlight.trim()}` : ''}
  ${peso ? ` - ${peso}` : ''}
  ${valor ? ` - ${valor}\n` : ''}

  Poderia me passar mais detalhes sobre disponibilidade e formas de pagamento?`;

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}