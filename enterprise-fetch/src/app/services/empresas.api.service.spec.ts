import { TestBed } from '@angular/core/testing';

import { EmpresasApiService } from './empresas-api-service';

describe('EmpresasApiService', () => {
  let service: EmpresasApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpresasApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
