import { TestBed } from '@angular/core/testing';

import { AddlinksService } from './addlinks.service';

describe('AddlinksService', () => {
  let service: AddlinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddlinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
