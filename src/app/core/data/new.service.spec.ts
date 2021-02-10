import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { NewProductsService } from './new.service';

describe('NewService', () => {
  let service: NewProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(NewProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
