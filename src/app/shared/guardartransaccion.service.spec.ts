import { TestBed } from '@angular/core/testing';

import { GuardartransaccionService } from './guardartransaccion.service';

describe('GuardartransaccionService', () => {
  let service: GuardartransaccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardartransaccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
