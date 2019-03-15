import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarditemPage } from './carditem.page';

describe('CarditemPage', () => {
  let component: CarditemPage;
  let fixture: ComponentFixture<CarditemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarditemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarditemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
