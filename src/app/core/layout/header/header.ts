import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  isMenuOpen = false;

  @ViewChild('headerContainer') headerRef!: ElementRef<HTMLElement>;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    // trava scroll
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent): void {
    if (!this.isMenuOpen) return;

    const target = event.target as HTMLElement;

    const clickedInsideHeader =
      this.headerRef?.nativeElement.contains(target);

    if (!clickedInsideHeader) {
      this.closeMenu();
    }
  }

  // ESC fecha menu
  @HostListener('document:keydown.escape')
  handleEscape(): void {
    this.closeMenu();
  }

}
