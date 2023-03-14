/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StakeMineComponent } from './stake-mine.component';

describe('StakeMineComponent', () => {
  let component: StakeMineComponent;
  let fixture: ComponentFixture<StakeMineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StakeMineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeMineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
