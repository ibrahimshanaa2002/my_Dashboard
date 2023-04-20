import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdCardComponent } from './md-card.component';

describe('Dash3Component', () => {
  let component: MdCardComponent;
  let fixture: ComponentFixture<MdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
