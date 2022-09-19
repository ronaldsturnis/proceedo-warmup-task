import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MovieDetailsService } from './movie-details.service';

describe('MovieDetailsService', () => {
  let service: MovieDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(MovieDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
