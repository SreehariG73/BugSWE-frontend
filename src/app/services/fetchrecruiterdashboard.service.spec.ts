import { TestBed } from '@angular/core/testing';

import { FetchrecruiterdashboardService } from './fetchrecruiterdashboard.service';

describe('FetchrecruiterdashboardService', () => {
  let service: FetchrecruiterdashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchrecruiterdashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
