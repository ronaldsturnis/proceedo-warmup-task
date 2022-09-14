import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SearchMoviesService } from './search-movies.service';

describe('SearchMoviesService', () => {
  let service: SearchMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(SearchMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
