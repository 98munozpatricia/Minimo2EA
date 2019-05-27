import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationdetailPage } from './stationdetail.page';

describe('StationdetailPage', () => {
  let component: StationdetailPage;
  let fixture: ComponentFixture<StationdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
