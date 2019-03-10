import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagelistsPage } from './pagelists.page';

describe('PagelistsPage', () => {
  let component: PagelistsPage;
  let fixture: ComponentFixture<PagelistsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagelistsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagelistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
