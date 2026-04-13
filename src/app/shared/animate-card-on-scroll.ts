import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnimateCardOnScroll]',
  standalone: true
})
export class AnimateCardOnScroll implements OnInit, OnDestroy {

  @Input() delay: number = 0; // aceita index ou valor manual
  @Input() once: boolean = false; // anima só uma vez
  @Input() direction: 'up' | 'left' | 'right' = 'up';

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {

    const delayTime = this.delay * 10;

    // direção inicial
    let transformInitial = 'translateY(40px)';

    if (this.direction === 'left') {
      transformInitial = 'translateX(-40px)';
    }

    if (this.direction === 'right') {
      transformInitial = 'translateX(40px)';
    }

    // estado inicial
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transform', transformInitial);
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      `all 0.6s ease ${delayTime}ms`
    );

    this.observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
          this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate(0)');

          if (this.once) {
            this.observer.unobserve(this.el.nativeElement);
          }

        } else if (!this.once) {
          this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
          this.renderer.setStyle(this.el.nativeElement, 'transform', transformInitial);
        }

      },
      { threshold: 0.2 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

/* 
Como usar:
USO NO @FOR
<div 
  *ngFor="let item of produtos; let i = index"
  appAnimateCardOnScroll
  [delay]="i"
>
</div>

ORDEM DE DELAY
<img appAnimateCardOnScroll [delay]="0">
<img appAnimateCardOnScroll [delay]="1">
<img appAnimateCardOnScroll [delay]="2">

DIREÇÃO
<img appAnimateCardOnScroll direction="left">
<img appAnimateCardOnScroll direction="right">
<img appAnimateCardOnScroll direction="up">

EFEITO UMA VEZ
<div appAnimateCardOnScroll [once]="true"></div>


obs:
no container do elemento animado, colocar overflow: hidden;

*/