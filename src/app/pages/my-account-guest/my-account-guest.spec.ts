import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountGuest } from './my-account-guest';

describe('MyAccountGuest', () => {
  let component: MyAccountGuest;
  let fixture: ComponentFixture<MyAccountGuest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyAccountGuest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAccountGuest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
