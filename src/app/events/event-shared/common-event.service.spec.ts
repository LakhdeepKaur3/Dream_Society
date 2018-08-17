import { TestBed, inject } from '@angular/core/testing';

import { CommonEventService } from './common-event.service';

describe('CommonEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonEventService]
    });
  });

  it('should be created', inject([CommonEventService], (service: CommonEventService) => {
    expect(service).toBeTruthy();
  }));
});
