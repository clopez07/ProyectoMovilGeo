import { TestBed } from '@angular/core/testing';

import { FotosLocal } from './fotos-local';

describe('FotosLocal', () => {
  let service: FotosLocal;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotosLocal);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
