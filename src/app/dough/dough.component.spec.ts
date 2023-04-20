import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughComponent } from './dough.component';

describe('DoughComponent', () => {
  let component: DoughComponent;
  let fixture: ComponentFixture<DoughComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoughComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
