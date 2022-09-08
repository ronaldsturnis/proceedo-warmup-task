import { TestBed } from '@angular/core/testing';

import { TopRatedMoviesService } from './top-rated-movies.service';

describe('FavouriteMoviesService', () => {
  let service: TopRatedMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopRatedMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
