import { TestBed } from '@angular/core/testing';

import { ValidartarjetaService } from './validartarjeta.service';

describe('ValidartarjetaService', () => {
  let service: ValidartarjetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidartarjetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
