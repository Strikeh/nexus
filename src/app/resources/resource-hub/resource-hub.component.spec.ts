import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceHubComponent } from './resource-hub.component';

describe('ResourceHubComponent', () => {
  let component: ResourceHubComponent;
  let fixture: ComponentFixture<ResourceHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceHubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
