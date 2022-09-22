import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
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

  it('should redirect when clicked'),
    () => {
      component.showMovieDetails(0);

      expect(component).toBeFalsy();
    };
});
