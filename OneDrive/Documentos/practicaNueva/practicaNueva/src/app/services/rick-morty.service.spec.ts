import { TestBed } from '@angular/core/testing';

import { RickAndMortyService } from './rick-morty.service';

describe('RickMortyService', () => {
  let service: RickAndMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickAndMortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});