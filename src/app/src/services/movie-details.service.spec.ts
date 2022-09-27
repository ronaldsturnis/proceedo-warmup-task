import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { IMovieDetails } from '../models/IMovieDetails.model';

import { MovieDetailsService } from './movie-details.service';

describe('MovieDetailsService', () => {
  let service: MovieDetailsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(MovieDetailsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should execute http request to get movie details', (done) => {
    const movieId = 424;
    const expectedResult: IMovieDetails = {
      adult: false,
      budget: 22000000,
      genres: [{ id: 18, name: 'Drama' }],
      id: 424,
      original_language: 'en',
      original_title: 'Schindler`s List',
      popularity: 64.74,
      production_companies: [{ id: 33, logo_path: '/8lvHyhjr8oUKOOy2dKXoALWKdp0.png', name: 'Universal Pictures', origin_country: 'US' }],
      production_countries: [{ iso_3166_1: 'US', name: 'United States of America' }],
      release_date: '1993-12-15',
      revenue: 321365567,
      spoken_languages: [{ english_name: 'German', iso_639_1: 'de', name: 'Deutsch' }],
      status: 'Released',
      title: 'Schindler`s List',
      video: false,
      vote_average: 8.575,
      vote_count: 13251,
    };

    service.getMovieDetails(movieId).subscribe((result) => {
      expect(result).toBe(expectedResult);
      done();
    });

    httpTestingController
      .expectOne({ method: 'GET', url: `${environment.apiURL}/movie/${movieId}?api_key=${environment.apiKey}` })
      .flush(expectedResult);
  });
});
