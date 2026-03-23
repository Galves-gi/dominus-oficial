import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./core/layout/header/header";
import { Footer } from "./core/layout/footer/footer";
import { IconeWhatsapp } from "./core/layout/icone-whatsapp/icone-whatsapp";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, IconeWhatsapp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dominus');
}
