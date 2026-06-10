import { Component, OnInit,Renderer2, Inject } from '@angular/core';
import { CardProductHome } from "../../shared/components/card-product-home/card-product-home";
import { cardsData } from "./data"
import { Banner } from '../../shared/components/banner/banner';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { AnimateCardOnScroll } from '../../shared/animate-card-on-scroll';
@Component({
  selector: 'app-home',
  imports: [CardProductHome, Banner, AnimateCardOnScroll],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  dataProduct = cardsData;
  cafelab = {
        id: 7,
        image: "imagens-home/cafelab.avif",
        title: "CAFÉ LAB: Pra se encantar, é só começar!",
        title_highlight: "",
        type: "",
        specification: "a partir de R$50,00",
        description: "Vivência sensorial e educativa, com ênfase na cultura do café especial, na sustentabilidade e na agroecologia. Duração: 03h Agendamento pelo whatsapp.",
        description_highlight: "",
        botao:"QUERO SABER MAIS",
    };

  constructor(private meta: Meta, private title: Title, private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
) { }

  ngOnInit() {
    this.setJsonLd();
    /* SEO */
    this.title.setTitle('Cafés Especiais | Dominus Cafés');

    this.meta.addTags([
      {
        name: 'description',
        content: 'Cafés especiais selecionados, torrados com qualidade e entregues na sua casa.'
      },
      {
        name: 'keywords',
        content: 'café especial, café gourmet, café especial em grãos, café especial torrado, café especial de minas, café arara, café catucaí, café 86pts, dripp coffee'
      },
      {
        name: 'robots',
        content: 'index, follow'
      }
    ]);

    this.meta.addTags([
      { property: 'og:title', content: 'Dominus Cafés' },
      { property: 'og:description', content: 'Cafés especiais selecionados' },
      { property: 'og:image', content: 'https://dominuscafes.com.br/favicon.svg' },
      { property: 'og:type', content: 'website' }
    ]);
  }
  /* FIM SEO */
  /* CRIAR JSON-LD */
  setJsonLd() {

  const products = this.dataProduct.map(cafe => ({
    "@type": "Product",
    name: cafe.title,
    description: cafe.description,
    image: `https://dominuscafes.com.br/${cafe.image}`,
    brand: {
      "@type": "Brand",
      name: "Dominus Cafés"
    },
    offers: {
      "@type": "Offer",
      price: this.extractPrice(cafe.specification),
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock"
    }
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products
  };

    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);

    this.renderer.appendChild(this.document.head, script);
  }
  extractPrice(spec: string): string {
    const match = spec.match(/R\$(\d+,\d+)/);
    return match ? match[1].replace(',', '.') : '0';
  }
}
