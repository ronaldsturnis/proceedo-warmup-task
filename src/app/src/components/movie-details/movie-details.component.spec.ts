import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';
import { MovieDetailsService } from '../../services/movie-details.service';
import { provideMockService } from '../../services/mock-service-provider';
import { MovieDetailsComponent } from './movie-details.component';
import { ActivatedRoute } from '@angular/router';
import { IMovieDetails } from '../../models/IMovieDetails.model';
import { of } from 'rxjs';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let movieDetailsService: jasmine.SpyObj<MovieDetailsService>;

  const mockMovieDetails = {} as IMovieDetails;
  const fakeActivatedRoute = {
    snapshot: { data: {} },
  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieDetailsComponent],
      providers: [provideMockService(MovieDetailsService), { provide: ActivatedRoute, useValue: fakeActivatedRoute }],
    })
      .overrideTemplate(MovieDetailsComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    movieDetailsService = TestBed.inject(MovieDetailsService) as jasmine.SpyObj<MovieDetailsService>;
    movieDetailsService.getMovieDetails.and.returnValue(of(mockMovieDetails));
    component = TestBed.createComponent(MovieDetailsComponent).componentInstance;
  });

  describe('ngOnInit', () => {
    describe('searchResults$', () => {
      it('should call service to get movie details', () => {
        component.ngOnInit();
        expect(component.movieDetails$).toBeObservable(cold('(0|)', [mockMovieDetails]));
        expect(movieDetailsService.getMovieDetails).toHaveBeenCalled();
      });
    });
  });

  it('favourite button should be enabled when clicked', () => {
    component.markMovieAsFavourite();

    expect(component.selectedAsFavourite).toBe(true);
  });

  it('favourite button should be disabled when clicked while enabled', () => {
    component.markMovieAsFavourite();
    component.markMovieAsFavourite();

    expect(component.selectedAsFavourite).toBe(false);
  });

  it('should redirect when homepage button clicked', () => {
    spyOn(component, 'redirectToHomepage');
    component.redirectToHomepage();
    expect(component.redirectToHomepage).toHaveBeenCalled();
  });
});
