import { TestBed } from '@angular/core/testing';

import { VoluntaryDisclosureService } from './voluntary-disclosure.service';

describe('VoluntaryDisclosureService', () => {
  let service: VoluntaryDisclosureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoluntaryDisclosureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
