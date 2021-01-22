import { TestBed } from '@angular/core/testing';

import { NewProductsService } from './new.service';

describe('NewService', () => {
  let service: NewProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
