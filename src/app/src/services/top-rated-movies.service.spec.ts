import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TopRatedMoviesService } from './top-rated-movies.service';

describe('TopRatedMoviesService', () => {
  let service: TopRatedMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(TopRatedMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
