import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KPISComponent } from './kpis.component';

describe('KPISComponent', () => {
  let component: KPISComponent;
  let fixture: ComponentFixture<KPISComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KPISComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KPISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
