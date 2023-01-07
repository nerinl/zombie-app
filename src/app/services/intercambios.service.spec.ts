import { TestBed } from '@angular/core/testing';

import { IntercambiosService } from './intercambios.service';

describe('IntercambiosService', () => {
  let service: IntercambiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntercambiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
