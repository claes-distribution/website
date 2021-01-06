import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InspireTextComponent } from './inspire-text.component';

describe('InspireTextComponent', () => {
  let component: InspireTextComponent;
  let fixture: ComponentFixture<InspireTextComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InspireTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspireTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
