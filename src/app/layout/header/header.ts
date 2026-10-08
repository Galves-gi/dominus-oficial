import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    // ESC fecha o menu
    '(document:keydown.escape)': 'closeMenu()',
  },
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  private readonly doc = inject(DOCUMENT);

  protected readonly isMenuOpen = signal(false);

  constructor() {
    // Garante que o scroll da página seja liberado se o componente for destruído
    inject(DestroyRef).onDestroy(() => (this.doc.body.style.overflow = ''));
  }

  protected toggleMenu(): void {
    this.setMenu(!this.isMenuOpen());
  }

  protected closeMenu(): void {
    if (this.isMenuOpen()) this.setMenu(false);
  }

  protected scrollToTop(): void {
    this.doc.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private setMenu(open: boolean): void {
    this.isMenuOpen.set(open);
    // trava o scroll enquanto o menu está aberto
    this.doc.body.style.overflow = open ? 'hidden' : '';
  }
}