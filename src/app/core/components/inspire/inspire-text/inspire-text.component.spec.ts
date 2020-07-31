import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspireTextComponent } from './inspire-text.component';

describe('InspireTextComponent', () => {
  let component: InspireTextComponent;
  let fixture: ComponentFixture<InspireTextComponent>;

  beforeEach(async(() => {
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
