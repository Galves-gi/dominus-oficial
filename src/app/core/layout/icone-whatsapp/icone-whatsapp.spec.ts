import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconeWhatsapp } from './icone-whatsapp';

describe('IconeWhatsapp', () => {
  let component: IconeWhatsapp;
  let fixture: ComponentFixture<IconeWhatsapp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconeWhatsapp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconeWhatsapp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
