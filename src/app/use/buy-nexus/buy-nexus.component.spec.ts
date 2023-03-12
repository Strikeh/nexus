import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyNexusComponent } from './buy-nexus.component';

describe('BuyNexusComponent', () => {
  let component: BuyNexusComponent;
  let fixture: ComponentFixture<BuyNexusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyNexusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyNexusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
