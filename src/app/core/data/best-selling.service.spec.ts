import { TestBed } from '@angular/core/testing';

import { BestSellingService } from './best-selling.service';

describe('BestSellingService', () => {
  let service: BestSellingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestSellingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
