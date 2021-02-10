import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BestSellingProductsService } from './best-selling.service';

describe('BestSellingService', () => {
  let service: BestSellingProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(BestSellingProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
