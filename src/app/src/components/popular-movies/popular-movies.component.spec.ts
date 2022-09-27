import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';
import { PopularMoviesComponent } from './popular-movies.component';
import { provideMockService } from '../../services/mock-service-provider';
import { PopularMoviesService } from '../../services/popular-movies.service';
import { IMoviePage } from '../../models/IMoviePage.model';
import { of } from 'rxjs';

describe('PopularMoviesComponent', () => {
  let component: PopularMoviesComponent;
  let popularMoviesService: jasmine.SpyObj<PopularMoviesService>;
  const mockPopularMovies = {} as IMoviePage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularMoviesComponent],
      providers: [provideMockService(PopularMoviesService)],
    })
      .overrideTemplate(PopularMoviesComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    popularMoviesService = TestBed.inject(PopularMoviesService) as jasmine.SpyObj<PopularMoviesService>;
    popularMoviesService.getPopularMovies.and.returnValue(of(mockPopularMovies));
    component = TestBed.createComponent(PopularMoviesComponent).componentInstance;
  });

  describe('ngOnInit', () => {
    describe('popularMovieList$', () => {
      it('should call service to get popular movies', () => {
        component.ngOnInit();
        expect(component.popularMovieList$).toBeObservable(cold('(0|)', [mockPopularMovies]));
        expect(popularMoviesService.getPopularMovies).toHaveBeenCalled();
      });
    });
  });
});
