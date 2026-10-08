import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';

const DELAY_INICIAL = 1000; 
const TEMPO_ABERTO = 6000;
const TEMPO_FECHADO = 4000;

const MENSAGEM = [
  'Olá, Dominus Cafés!',
  '',
  'Vim pelo site e gostaria de mais informações sobre os cafés disponíveis.',
  '',
  'Você pode me ajudar com:',
  '- Catálogo atual',
  '- Valores',
  '- Tipos (Torrado e Moído ou em Grãos)',
  '',
  'Gostaria de avaliar as opções para seguir com a compra',
].join('\n');

@Component({
  selector: 'app-icone-whatsapp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './icone-whatsapp.html',
  styleUrl: './icone-whatsapp.css',
})

export class IconeWhatsapp {
  private timer?: ReturnType<typeof setTimeout>;

  protected readonly isOpen = signal(false);
  protected readonly whatsAppLink = `https://wa.me/5531984504703?text=${encodeURIComponent(MENSAGEM)}`;

  constructor() {
    // Só inicia o ciclo no navegador (não roda durante o prerender)
    afterNextRender(() => this.agendarAbertura(DELAY_INICIAL));

    inject(DestroyRef).onDestroy(() => clearTimeout(this.timer));
  }

  /** Clique do usuário: alterna a caixa e interrompe o ciclo automático. */
  protected toggleWhatsApp(): void {
    clearTimeout(this.timer);
    this.isOpen.update((aberto) => !aberto);
  }

  private agendarAbertura(espera: number): void {
    this.timer = setTimeout(() => {
      this.isOpen.set(true);
      this.agendarFechamento();
    }, espera);
  }

  private agendarFechamento(): void {
    this.timer = setTimeout(() => {
      this.isOpen.set(false);
      this.agendarAbertura(TEMPO_FECHADO);
    }, TEMPO_ABERTO);
  }
}