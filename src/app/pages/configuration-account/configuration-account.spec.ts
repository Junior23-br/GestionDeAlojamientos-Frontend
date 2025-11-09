import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationAccount } from './configuration-account';

describe('ConfigurationAccount', () => {
  let component: ConfigurationAccount;
  let fixture: ComponentFixture<ConfigurationAccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigurationAccount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationAccount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
