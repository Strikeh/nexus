/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FAQComponent } from './faq.component';

describe('SecurityAuditComponent', () => {
  let component: FAQComponent;
  let fixture: ComponentFixture<FAQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FAQComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
