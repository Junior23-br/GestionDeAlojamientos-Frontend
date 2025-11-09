import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHost } from './about-host';

describe('AboutHost', () => {
  let component: AboutHost;
  let fixture: ComponentFixture<AboutHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutHost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutHost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
