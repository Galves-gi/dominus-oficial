import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { generateWhatsAppLink } from '../../../core/helpers/whatsapp.helper';
import { Product } from '../../../core/model/card-product-home.model';

let nextId = 0;

@Component({
  imports: [],
  selector: 'app-card-product-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './card-product-home.css',
  templateUrl: './card-product-home.html',
})
export class CardProductHome {
  readonly product = input.required<Product>();

  protected readonly titleId = `card-produto-titulo-${nextId++}`;

  protected readonly link = computed(() => generateWhatsAppLink(this.product()));

  protected readonly ariaLabel = computed(
    () => `Comprar café ${this.product().title} ${this.product().specification} pelo WhatsApp`,
  );
}
