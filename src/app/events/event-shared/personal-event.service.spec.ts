import { TestBed, inject } from '@angular/core/testing';

import { PersonalEventService } from './personal-event.service';

describe('PersonalEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonalEventService]
    });
  });

  it('should be created', inject([PersonalEventService], (service: PersonalEventService) => {
    expect(service).toBeTruthy();
  }));
});
