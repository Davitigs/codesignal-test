// data.service.spec.ts

import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate pseudo socket data', () => {
    const size = 10;
    const additionalIds: string[] = [];
    const data = service.generatePseudoSocketData(size, additionalIds);
    expect(data.length).toBe(size);
  });
});
