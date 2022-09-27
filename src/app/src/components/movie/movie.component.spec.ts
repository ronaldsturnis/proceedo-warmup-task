import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieComponent } from './movie.component';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MovieComponent],
    })
      .overrideTemplate(MovieComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('favourite button should switch values when clicked', () => {
    component.markMovieAsFavourite();
    expect(component.selectedAsFavourite).toBe(true);
    component.markMovieAsFavourite();
    expect(component.selectedAsFavourite).toBe(false);
  });

  it('should redirect when clicked', () => {
    const resultUrl = 'movie';
    const movieId = 424;

    spyOn(router, 'navigate');
    component.showMovieDetails(movieId);

    expect(router.navigate).toHaveBeenCalledWith([resultUrl], Object({ queryParams: Object({ movieId: movieId }) }));
  });
});
