import { TestBed, inject } from '@angular/core/testing';
import { FootballService } from './home.service';

describe('HomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FootballService]
    });
  });

  it('should be created', inject([FootballService], (service: FootballService) => {
    expect(service).toBeTruthy();
  }));
});
