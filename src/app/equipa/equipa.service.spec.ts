import { TestBed, inject } from '@angular/core/testing';

import { EquipaService } from './equipa.service';

describe('EquipaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EquipaService]
    });
  });

  it('should be created', inject([EquipaService], (service: EquipaService) => {
    expect(service).toBeTruthy();
  }));
});
