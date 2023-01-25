import { TestBed } from '@angular/core/testing';

import { DisplayProductsService } from './display-products.service';

describe('DisplayProductsService', () => {
  let service: DisplayProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
