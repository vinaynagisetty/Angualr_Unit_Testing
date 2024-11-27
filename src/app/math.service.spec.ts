import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it('should be created', () => {
    console.log('MathService test file is loaded');
    expect(service).toBeTruthy();
  });
  it('should add two numbers', () => {
    const result = service.add(2, 3);
    expect(result).toBe(5); // Check if the result is correct
  });
});
