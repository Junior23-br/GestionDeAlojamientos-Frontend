import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeHost } from './be-host';

describe('BeHost', () => {
  let component: BeHost;
  let fixture: ComponentFixture<BeHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeHost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeHost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
