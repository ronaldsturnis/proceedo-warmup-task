import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { IMoviePage } from '../models/IMoviePage.model';

import { SearchMoviesService } from './search-movies.service';

describe('SearchMoviesService', () => {
  let service: SearchMoviesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(SearchMoviesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should execute http request to get search results', (done) => {
    const searchQuery = 'aaaaaaaa';
    const expectedResult: IMoviePage = {
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: null,
          genre_ids: [35, 27, 53],
          id: 347760,
          original_language: 'en',
          original_title: 'Aaaaaaaah!',
          overview:
            'Alpha Male Smith and his Beta, Keith, move to take over a local community. They hook up with restless Female, Denise, ' +
            +'igniting a deadly feud in which emotions run high and deep-seated grudges resurface amongst the tribe. ' +
            +'Are we not men? Or are we simply beasts?',
          popularity: 3.284,
          poster_path: '/27oy5CoIDmPLYPshfxD6oWLgTst.jpg',
          release_date: '2015-08-28',
          title: 'Aaaaaaaah!',
          video: false,
          vote_average: 4.6,
          vote_count: 36,
        },
      ],
      total_pages: 1,
      total_results: 1,
    };

    service.getSearchResults(searchQuery).subscribe((result) => {
      expect(result).toBe(expectedResult);
      done();
    });

    httpTestingController
      .expectOne({ method: 'GET', url: `${environment.apiURL}/search/movie?api_key=${environment.apiKey}&query=${searchQuery}` })
      .flush(expectedResult);
  });
});
