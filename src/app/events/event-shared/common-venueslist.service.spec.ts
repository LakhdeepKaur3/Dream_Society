import { TestBed, inject } from '@angular/core/testing';

import { CommonVenueslistService } from './common-venueslist.service';

describe('CommonVenueslistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonVenueslistService]
    });
  });

  it('should be created', inject([CommonVenueslistService], (service: CommonVenueslistService) => {
    expect(service).toBeTruthy();
  }));
});
