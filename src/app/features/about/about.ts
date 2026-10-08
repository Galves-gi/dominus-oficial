import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimateCardOnScroll } from '../../shared/components/animate-card-on-scroll';

@Component({
  imports: [AnimateCardOnScroll],
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {}
