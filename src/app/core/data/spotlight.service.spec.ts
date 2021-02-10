import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SpotlightProductsService } from './spotlight.service';

describe('SpotlightService', () => {
  let service: SpotlightProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(SpotlightProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
