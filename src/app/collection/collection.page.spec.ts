import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CollectionPage } from './collection.page';

describe('ListPage', () => {
  let component: CollectionPage;
  let fixture: ComponentFixture<CollectionPage>;
  let collectionPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(CollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    collectionPage = fixture.nativeElement;
    const items = collectionPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
