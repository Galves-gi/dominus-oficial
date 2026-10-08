import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SITE } from '../config/site.config';
import { SeoData } from '../model/seo.model';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  update(data: SeoData): void {
    const fullTitle = `${data.title} | ${SITE.name}`;
    const url = SITE.url + data.path;
    const image = SITE.url + (data.image ?? SITE.defaultImage);

    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({
      name: 'robots',
      content: data.noindex ? 'noindex,nofollow' : 'index,follow',
    });

    // Open Graph / Twitter
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:locale', content: SITE.locale });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

    this.setCanonical(url);
    this.setJsonLd(data.jsonLd);
  }

  private setCanonical(url: string): void {
    let link = this.doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.rel = 'canonical';
      this.doc.head.appendChild(link);
    }
    link.href = url;
  }

  private setJsonLd(json?: Record<string, unknown>): void {
    const id = 'json-ld';
    this.doc.getElementById(id)?.remove();
    if (!json) return;
    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(json);
    this.doc.head.appendChild(script);
  }
}