import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';
import { TopRatedMoviesComponent } from './top-rated-movies.component';
import { provideMockService } from '../../services/mock-service-provider';
import { TopRatedMoviesService } from '../../services/top-rated-movies.service';
import { IMoviePage } from '../../models/IMoviePage.model';
import { of } from 'rxjs';

describe('TopRatedMoviesComponent', () => {
  let component: TopRatedMoviesComponent;
  let topRatedMoviesService: jasmine.SpyObj<TopRatedMoviesService>;
  const mockTopRatedMovies = {} as IMoviePage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopRatedMoviesComponent],
      providers: [provideMockService(TopRatedMoviesService)],
    })
      .overrideTemplate(TopRatedMoviesComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    topRatedMoviesService = TestBed.inject(TopRatedMoviesService) as jasmine.SpyObj<TopRatedMoviesService>;
    topRatedMoviesService.getTopRatedMovies.and.returnValue(of(mockTopRatedMovies));
    component = TestBed.createComponent(TopRatedMoviesComponent).componentInstance;
  });

  describe('ngOnInit', () => {
    describe('topRatedMovieList$', () => {
      it('should call service to get top rated movies', () => {
        component.ngOnInit();
        expect(component.topRatedMovieList$).toBeObservable(cold('(0|)', [mockTopRatedMovies]));
        expect(topRatedMoviesService.getTopRatedMovies).toHaveBeenCalled();
      });
    });
  });
});
