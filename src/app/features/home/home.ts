import { ChangeDetectionStrategy, Component } from '@angular/core';
import { cafelab, cardsData } from './data';
import { CardProductHome } from '../../shared/components/card-product-home/card-product-home';
import { Banner } from '../../shared/components/banner/banner';
import { AnimateCardOnScroll } from '../../shared/components/animate-card-on-scroll';
import { Product } from '../../core/model/card-product-home.model';
import { HOME_CONTENT } from './home.content';

@Component({
  imports: [CardProductHome, Banner, AnimateCardOnScroll],
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  protected readonly content = HOME_CONTENT;
  protected readonly dataProduct = cardsData;
  protected readonly cafelab = cafelab;
}
