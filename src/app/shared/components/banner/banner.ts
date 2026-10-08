import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HOME_CONTENT } from '../../../features/home/home.content';

@Component({
  selector: 'app-banner',
  imports: [NgOptimizedImage, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './banner.css',
  templateUrl: './banner.html',
})
export class Banner {
  protected readonly content = HOME_CONTENT;
}
