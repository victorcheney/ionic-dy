import { TestBed } from '@angular/core/testing';

import { CheerioService } from './cheerio.service';

describe('CheerioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheerioService = TestBed.get(CheerioService);
    expect(service).toBeTruthy();
  });
});
