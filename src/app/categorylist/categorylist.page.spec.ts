import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorylistPage } from './categorylist.page';

describe('CategorylistPage', () => {
  let component: CategorylistPage;
  let fixture: ComponentFixture<CategorylistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorylistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
