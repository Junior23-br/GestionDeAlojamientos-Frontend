import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillPublication } from './detaill-publication';

describe('DetaillPublication', () => {
  let component: DetaillPublication;
  let fixture: ComponentFixture<DetaillPublication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetaillPublication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaillPublication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
