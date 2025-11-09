import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccomodation } from './create-accomodation';

describe('CreateAccomodation', () => {
  let component: CreateAccomodation;
  let fixture: ComponentFixture<CreateAccomodation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateAccomodation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccomodation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
