import { TestBed } from '@angular/core/testing';

import { DyHttpService } from './http.service';

describe('DyHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DyHttpService = TestBed.get(DyHttpService);
    expect(service).toBeTruthy();
  });
});
