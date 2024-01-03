/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BuscarclienteService } from './buscarcliente.service';

describe('Service: Buscarcliente', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuscarclienteService]
    });
  });

  it('should ...', inject([BuscarclienteService], (service: BuscarclienteService) => {
    expect(service).toBeTruthy();
  }));
});
