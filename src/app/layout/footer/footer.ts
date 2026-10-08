import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {}
