import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAccomodation } from './filter-accomodation';

describe('FilterAccomodation', () => {
  let component: FilterAccomodation;
  let fixture: ComponentFixture<FilterAccomodation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterAccomodation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterAccomodation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
