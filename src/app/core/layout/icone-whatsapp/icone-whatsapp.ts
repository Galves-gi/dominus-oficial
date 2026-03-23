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

  ngOnInit() {
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
