import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarLineChartComponent } from './barLineChart.component';

describe('LineComponent', () => {
  let component: BarLineChartComponent;
  let fixture: ComponentFixture<BarLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarLineChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
