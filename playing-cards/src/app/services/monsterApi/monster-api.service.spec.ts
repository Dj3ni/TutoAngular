import { TestBed } from '@angular/core/testing';

import { MonsterApiService } from './monster-api.service';

describe('MonsterApiService', () => {
  let service: MonsterApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonsterApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
