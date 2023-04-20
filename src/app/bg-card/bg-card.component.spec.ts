import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgCardComponent } from './bg-card.component';

describe('Dash1Component', () => {
  let component: BgCardComponent;
  let fixture: ComponentFixture<BgCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
