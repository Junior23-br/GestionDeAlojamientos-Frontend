import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillReservation } from './detaill-reservation';

describe('DetaillReservation', () => {
  let component: DetaillReservation;
  let fixture: ComponentFixture<DetaillReservation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetaillReservation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaillReservation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
