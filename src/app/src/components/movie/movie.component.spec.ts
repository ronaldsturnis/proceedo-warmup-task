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

  it('favourite button should be enabled when clicked', () => {
    component.markMovieAsFavourite();

    expect(component.selectedAsFavourite).toBe(true);
  });

  it('favourite button should be disabled when clicked while enabled', () => {
    component.markMovieAsFavourite();
    component.markMovieAsFavourite();

    expect(component.selectedAsFavourite).toBe(false);
  });

  it('should redirect when clicked', () => {
    spyOn(component, 'showMovieDetails');
    component.showMovieDetails(0);
    expect(component.showMovieDetails).toHaveBeenCalled();
  });
});
