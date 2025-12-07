import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Refused } from './refused';

describe('Refused', () => {
  let component: Refused;
  let fixture: ComponentFixture<Refused>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Refused]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Refused);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
