import { TestBed } from '@angular/core/testing';

import { CookieServicesService } from './cookie-services.service';

describe('CookieServicesService', () => {
  let service: CookieServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
