/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DappsComponent } from './dapps.component';

describe('DappsComponent', () => {
  let component: DappsComponent;
  let fixture: ComponentFixture<DappsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DappsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
