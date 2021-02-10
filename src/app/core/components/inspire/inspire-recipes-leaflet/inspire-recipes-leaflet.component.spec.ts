import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { InspireRecipesLeafletComponent } from './inspire-recipes-leaflet.component';

describe('InspireRecipesLeafletComponent', () => {
  let component: InspireRecipesLeafletComponent;
  let fixture: ComponentFixture<InspireRecipesLeafletComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InspireRecipesLeafletComponent],
      imports: [
        TranslateModule.forRoot()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspireRecipesLeafletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
