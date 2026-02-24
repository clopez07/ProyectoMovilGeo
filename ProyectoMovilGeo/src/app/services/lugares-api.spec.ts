import { TestBed } from '@angular/core/testing';

import { LugaresApi } from './lugares-api';

describe('LugaresApi', () => {
  let service: LugaresApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LugaresApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
