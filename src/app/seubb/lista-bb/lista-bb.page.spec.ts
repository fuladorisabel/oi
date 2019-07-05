import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBbPage } from './lista-bb.page';

describe('ListaBbPage', () => {
  let component: ListaBbPage;
  let fixture: ComponentFixture<ListaBbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaBbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
