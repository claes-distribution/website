import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { BlogpostsService } from 'src/app/core/data/blogposts.service';
import { BlogpostPopupComponent } from '../../popups/blogpost-popup/blogpost-popup.component';

import { InspireNewsComponent } from './inspire-news.component';

describe('InspireNewsComponent', () => {
  let component: InspireNewsComponent;
  let fixture: ComponentFixture<InspireNewsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        InspireNewsComponent,
        BlogpostPopupComponent
      ],
      providers: [
        BlogpostsService
      ],
      imports: [
        HttpClientModule,
        TranslateModule.forRoot()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspireNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
