import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStrengthsChartComponent } from './user-strengths-chart.component';

describe('UserStrengthsChartComponent', () => {
  let component: UserStrengthsChartComponent;
  let fixture: ComponentFixture<UserStrengthsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserStrengthsChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStrengthsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
