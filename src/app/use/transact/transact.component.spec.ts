/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TransactComponent } from './transact.component';

describe('TransactComponent', () => {
  let component: TransactComponent;
  let fixture: ComponentFixture<TransactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
