import { TestBed } from '@angular/core/testing';

import { PokestoreService } from './pokestore.service';

describe('PokestoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokestoreService = TestBed.get(PokestoreService);
    expect(service).toBeTruthy();
  });
});
