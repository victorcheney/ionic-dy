import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ThemePage } from './theme.page';

describe('ListPage', () => {
  let component: ThemePage;
  let fixture: ComponentFixture<ThemePage>;
  let themePage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(ThemePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    themePage = fixture.nativeElement;
    const items = themePage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
