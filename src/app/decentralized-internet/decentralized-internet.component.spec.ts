import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecentralizedInternetComponent } from './decentralized-internet.component';

describe('DecentralizedInternetComponent', () => {
  let component: DecentralizedInternetComponent;
  let fixture: ComponentFixture<DecentralizedInternetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecentralizedInternetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecentralizedInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
