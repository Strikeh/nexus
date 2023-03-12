/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HybridNetworksComponent } from './hybrid-networks.component';

describe('HybridNetworksComponent', () => {
  let component: HybridNetworksComponent;
  let fixture: ComponentFixture<HybridNetworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HybridNetworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridNetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
