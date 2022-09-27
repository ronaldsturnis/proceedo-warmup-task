import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { paths } from 'src/app/paths.const';
import { SearchFieldComponent } from './search-field.component';

describe('SearchMovieComponent', () => {
  let component: SearchFieldComponent;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchFieldComponent],
    })
      .overrideTemplate(SearchFieldComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    component = TestBed.createComponent(SearchFieldComponent).componentInstance;
  });

  describe('ngOnInit', () => {
    it('should redirect when homepage button clicked', () => {
      const resultUrl = paths.searchResultsPath;
      const searchQuery = 'fall';

      spyOn(router, 'navigate');
      component.redirectToSearchResults(searchQuery);

      expect(router.navigate).toHaveBeenCalledWith([resultUrl], Object({ queryParams: Object({ searchQuery: 'fall' }) }));
    });
  });
});
