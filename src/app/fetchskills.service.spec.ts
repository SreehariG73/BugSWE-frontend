import { TestBed } from '@angular/core/testing';

import { FetchskillsService } from './fetchskills.service';

describe('FetchskillsService', () => {
  let service: FetchskillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchskillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
