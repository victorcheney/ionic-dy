import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpagePage } from './searchpage.page';

describe('SearchpagePage', () => {
  let component: SearchpagePage;
  let fixture: ComponentFixture<SearchpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
