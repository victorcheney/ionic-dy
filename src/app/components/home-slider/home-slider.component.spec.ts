import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSliderPage } from './home-slider.page';

describe('HomeSliderPage', () => {
  let component: HomeSliderPage;
  let fixture: ComponentFixture<HomeSliderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSliderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
