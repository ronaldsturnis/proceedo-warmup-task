import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { IMoviePage } from '../models/IMoviePage.model';
import { TopRatedMoviesService } from './top-rated-movies.service';

describe('TopRatedMoviesService', () => {
  let service: TopRatedMoviesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(TopRatedMoviesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should execute http request to get top rated movies', (done) => {
    const expectedResult: IMoviePage = {
      page: 1,
      results: [],
      total_pages: 517,
      total_results: 10330,
    };

    service.getTopRatedMovies().subscribe((result) => {
      expect(result).toBe(expectedResult);
      done();
    });

    httpTestingController
      .expectOne({ method: 'GET', url: `${environment.apiURL}/movie/top_rated?api_key=${environment.apiKey}` })
      .flush(expectedResult);
  });
});
