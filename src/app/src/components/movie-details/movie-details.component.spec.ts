import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';
import { MovieDetailsService } from '../../services/movie-details.service';
import { provideMockService } from '../../services/mock-service-provider';
import { MovieDetailsComponent } from './movie-details.component';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovieDetails } from '../../models/IMovieDetails.model';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let movieDetailsService: jasmine.SpyObj<MovieDetailsService>;
  let router: jasmine.SpyObj<Router>;
  let activatedRoute: ActivatedRoute;
  const mockMovieDetails = {} as IMovieDetails;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieDetailsComponent],
      providers: [provideMockService(MovieDetailsService), { provide: ActivatedRoute, useValue: { queryParams: of({ movieId: '424' }) } }],
      imports: [RouterTestingModule],
    })
      .overrideTemplate(MovieDetailsComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    activatedRoute = TestBed.inject(ActivatedRoute);
    movieDetailsService = TestBed.inject(MovieDetailsService) as jasmine.SpyObj<MovieDetailsService>;
    movieDetailsService.getMovieDetails.and.returnValue(of(mockMovieDetails));
    component = TestBed.createComponent(MovieDetailsComponent).componentInstance;
  });

  describe('ngOnInit', () => {
    describe('searchResults$', () => {
      it('should call service to get movie details', () => {
        component.ngOnInit();
        // serviceSpy.movieDetails$.and.returnValue(of([mockMovieDetails]));
        expect(component.movieDetails$).toBeObservable(cold('(0|)', [mockMovieDetails]));
        expect(movieDetailsService.getMovieDetails).toHaveBeenCalled();
      });
    });
  });

  describe('selectedAsFavourite', () => {
    it('favourite button should switch values when clicked', () => {
      component.markMovieAsFavourite();
      expect(component.selectedAsFavourite).toBe(true);
      component.markMovieAsFavourite();
      expect(component.selectedAsFavourite).toBe(false);
    });
  });

  describe('redirectToHomepage', () => {
    it('should redirect when homepage button clicked', () => {
      const resultUrl = 'top-rated';

      spyOn(router, 'navigate');
      component.redirectToHomepage();

      expect(router.navigate).toHaveBeenCalledWith([resultUrl]);
    });
  });
});
