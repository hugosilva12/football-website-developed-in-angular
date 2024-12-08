import { TestBed, inject } from '@angular/core/testing';

import { TeamschService } from './teamsch.service';

describe('TeamschService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamschService]
    });
  });

  it('should be created', inject([TeamschService], (service: TeamschService) => {
    expect(service).toBeTruthy();
  }));
});
