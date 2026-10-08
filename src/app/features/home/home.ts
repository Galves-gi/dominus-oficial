import { ChangeDetectionStrategy, Component } from '@angular/core';
import { cardsData } from './data';
import { CardProductHome } from '../../shared/components/card-product-home/card-product-home';
import { Banner } from '../../shared/components/banner/banner';
import { AnimateCardOnScroll } from '../../shared/components/animate-card-on-scroll';
import { Product } from '../../core/model/card-product-home';
import { HOME_CONTENT } from './home.content';

@Component({
  imports: [CardProductHome, Banner, AnimateCardOnScroll],
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  protected readonly c = HOME_CONTENT;
  protected readonly dataProduct = cardsData;
  protected readonly cafelab: Product = {
    id: 7,
    image: "imagens-home/cafelab.avif",
    title: "CAFÉ LAB: Pra se encantar, é só começar!",
    title_highlight: "",
    type: "",
    specification: "a partir de R$50,00",
    description: "Vivência sensorial e educativa, com ênfase na cultura do café especial, na sustentabilidade e na agroecologia. Duração: 03h Agendamento pelo whatsapp.",
    description_highlight: "",
    botao: "QUERO SABER MAIS",
  };
}
