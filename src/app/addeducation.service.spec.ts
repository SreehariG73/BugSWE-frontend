import { TestBed } from '@angular/core/testing';

import { AddeducationService } from './addeducation.service';

describe('AddeducationService', () => {
  let service: AddeducationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddeducationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
