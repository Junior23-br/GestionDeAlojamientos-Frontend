import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccomodations } from './my-accomodations';

describe('MyAccomodations', () => {
  let component: MyAccomodations;
  let fixture: ComponentFixture<MyAccomodations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyAccomodations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAccomodations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
