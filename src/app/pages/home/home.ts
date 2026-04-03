import { Component, OnInit } from '@angular/core';
import { CardProductHome } from "../../shared/components/card-product-home/card-product-home";
import { cardsData } from "./data"
import { Banner } from '../../shared/components/banner/banner';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [CardProductHome, Banner],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  dataProduct = cardsData;


  constructor(private meta: Meta, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Cafés Especiais | Dominus Cafés');

    this.meta.addTags([
      {
        name: 'description',
        content: 'Cafés especiais selecionados, torrados com qualidade e entregues na sua casa.'
      },
      {
        name: 'keywords',
        content: 'café especial, café gourmet, café em grãos, café torrado, café arara, café catucaí, café 86pts, dripp coffee'
      },
      {
        name: 'robots',
        content: 'index, follow'
      }
    ]);

    this.meta.addTags([
      { property: 'og:title', content: 'Dominus Cafés' },
      { property: 'og:description', content: 'Cafés especiais selecionados' },
      { property: 'og:image', content: 'https://dominus-oficial-pink.vercel.app/favicon.svg' },
      { property: 'og:type', content: 'website' }
    ]);
  }
}
