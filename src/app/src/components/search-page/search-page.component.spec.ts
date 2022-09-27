import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';
import { SearchMoviesService } from '../../services/search-movies.service';
import { SearchPageComponent } from './search-page.component';
import { provideMockService } from '../../services/mock-service-provider';
import { ActivatedRoute } from '@angular/router';
import { IMoviePage } from '../../models/IMoviePage.model';
import { of } from 'rxjs';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let searchMoviesService: jasmine.SpyObj<SearchMoviesService>;
  let activatedRoute: ActivatedRoute;
  const mockSearchResults = {} as IMoviePage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchPageComponent],
      providers: [
        provideMockService(SearchMoviesService),
        { provide: ActivatedRoute, useValue: { queryParams: of({ searchQuery: 'fall' }) } },
      ],
    })
      .overrideTemplate(SearchPageComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    activatedRoute = TestBed.inject(ActivatedRoute);
    searchMoviesService = TestBed.inject(SearchMoviesService) as jasmine.SpyObj<SearchMoviesService>;
    searchMoviesService.getSearchResults.and.returnValue(of(mockSearchResults));
    component = TestBed.createComponent(SearchPageComponent).componentInstance;
  });

  describe('ngOnInit', () => {
    describe('searchResults$', () => {
      it('should call service to get movies in search page', () => {
        component.ngOnInit();
        expect(component.searchResults$).toBeObservable(cold('(0|)', [mockSearchResults]));
        expect(searchMoviesService.getSearchResults).toHaveBeenCalled();
      });
    });
  });
});
