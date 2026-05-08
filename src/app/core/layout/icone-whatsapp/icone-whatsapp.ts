import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-icone-whatsapp',
  imports: [],
  templateUrl: './icone-whatsapp.html',
  styleUrl: './icone-whatsapp.css',
})
export class IconeWhatsapp {
  isOpen = signal(false);
  hasInteracted = signal(false);
  whatsAppMessage: string = '';

  ngOnInit() {
    /* Mensagem */
    const message = `Olá, Dominus Cafés! 

    Vim pelo site e gostaria de mais informações sobre os cafés disponíveis.

    Você pode me ajudar com:
    - Catálogo atual  
    - Valores  
    - Tipos (Torrado e Moído ou em Grãos)

    Gostaria de avaliar as opções para seguir com a compra`;

    this.whatsAppMessage = `https://wa.me/5531999525717?text=${encodeURIComponent(message)}`;
    /* fim mensagem */


    const delayInicial = 4000; // espera antes de começar
    const tempoAberto = 6000;
    const tempoFechado = 4000;

    setTimeout(() => {
      const loop = () => {
        if (this.hasInteracted()) return; // para se usuário interagir

        //abre
        this.isOpen.set(true);

        setTimeout(() => {
          if (this.hasInteracted()) return;

          // fecha
          this.isOpen.set(false);

          //  agenda próximo ciclo
          setTimeout(loop, tempoFechado);

        }, tempoAberto);
      };

      loop();
    }, delayInicial);
  }

  toggleWhatsApp() {
    this.isOpen.update(v => !v);
    this.hasInteracted.set(true);
  }

}
