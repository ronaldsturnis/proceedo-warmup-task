import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { IMoviePage } from '../models/IMoviePage.model';
import { PopularMoviesService } from './popular-movies.service';

describe('PopularMoviesService', () => {
  let service: PopularMoviesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(PopularMoviesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should execute http request to get popular movies', (done) => {
    const expectedResult: IMoviePage = {
      page: 1,
      results: [],
      total_pages: 517,
      total_results: 10330,
    };

    service.getPopularMovies().subscribe((result) => {
      expect(result).toBe(expectedResult);
      done();
    });

    httpTestingController
      .expectOne({ method: 'GET', url: `${environment.apiURL}/movie/popular?api_key=${environment.apiKey}` })
      .flush(expectedResult);
  });
});
