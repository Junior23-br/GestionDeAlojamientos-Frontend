import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReputation } from './my-reputation';

describe('MyReputation', () => {
  let component: MyReputation;
  let fixture: ComponentFixture<MyReputation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyReputation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyReputation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
