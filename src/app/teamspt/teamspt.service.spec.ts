import { TestBed, inject } from '@angular/core/testing';

import { TeamsptService } from './teamspt.service';

describe('TeamsptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamsptService]
    });
  });

  it('should be created', inject([TeamsptService], (service: TeamsptService) => {
    expect(service).toBeTruthy();
  }));
});
