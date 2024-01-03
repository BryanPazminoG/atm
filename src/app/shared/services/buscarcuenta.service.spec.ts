import { TestBed } from '@angular/core/testing';

import { BuscarcuentaService } from './buscarcuenta.service';

describe('BuscarcuentaService', () => {
  let service: BuscarcuentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarcuentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
