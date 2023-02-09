import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitepapersComponent } from './whitepapers.component';

describe('WhitepapersComponent', () => {
  let component: WhitepapersComponent;
  let fixture: ComponentFixture<WhitepapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhitepapersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhitepapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
