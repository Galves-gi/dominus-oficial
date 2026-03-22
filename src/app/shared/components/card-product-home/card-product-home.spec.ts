import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductHome } from './card-product-home';

describe('CardProductHome', () => {
  let component: CardProductHome;
  let fixture: ComponentFixture<CardProductHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProductHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProductHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
