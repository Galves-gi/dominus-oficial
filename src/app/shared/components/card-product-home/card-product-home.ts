import { Component, computed, input } from '@angular/core';
import { Product } from '../../../core/models/card-product-home';
import { generateWhatsAppLink } from '../../../core/helpers/whatsapp.helper';

@Component({
  selector: 'app-card-product-home',
  imports: [],
  templateUrl: './card-product-home.html',
  styleUrl: './card-product-home.css',
})
export class CardProductHome {
  
  product = input<Product>()
  link = computed(() => generateWhatsAppLink(this.product()));
}
