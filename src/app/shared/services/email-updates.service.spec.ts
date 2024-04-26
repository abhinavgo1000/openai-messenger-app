import { TestBed } from '@angular/core/testing';

import { EmailUpdatesService } from './email-updates.service';

describe('EmailUpdatesService', () => {
  let service: EmailUpdatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailUpdatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
