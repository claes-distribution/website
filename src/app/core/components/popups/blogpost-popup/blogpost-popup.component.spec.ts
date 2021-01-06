import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlogpostPopupComponent } from './blogpost-popup.component';

describe('BlogpostPopupComponent', () => {
  let component: BlogpostPopupComponent;
  let fixture: ComponentFixture<BlogpostPopupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogpostPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
