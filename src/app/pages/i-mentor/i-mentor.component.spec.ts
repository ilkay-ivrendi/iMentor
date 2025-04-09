import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMentorComponent } from './i-mentor.component';

describe('IMentorComponent', () => {
  let component: IMentorComponent;
  let fixture: ComponentFixture<IMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IMentorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
