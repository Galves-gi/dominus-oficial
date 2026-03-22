import { Component } from '@angular/core';
import { CardProductHome } from "../../shared/components/card-product-home/card-product-home";
import {cardsData} from "./data"
import { Banner } from '../../shared/components/banner/banner';

@Component({
  selector: 'app-home',
  imports: [CardProductHome, Banner],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  dataProduct = cardsData;
}
