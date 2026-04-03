import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sobre',
  imports: [],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre implements OnInit{

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Sobre nós | Dominus Cafés');

    this.meta.updateTag({
      name: 'description',
      content: 'Conheça a história da Dominus Cafés e nossa paixão por cafés especiais.'
    });
  }
  
}
