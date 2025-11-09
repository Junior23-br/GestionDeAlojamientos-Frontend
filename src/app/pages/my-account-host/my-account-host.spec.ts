import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountHost } from './my-account-host';

describe('MyAccountHost', () => {
  let component: MyAccountHost;
  let fixture: ComponentFixture<MyAccountHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyAccountHost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAccountHost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
