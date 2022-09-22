import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieDetailsService } from '../../services/movie-details.service';

import { MovieDetailsComponent } from './movie-details.component';

describe('MovieDetailsComponent', () => {
  const fakeActivatedRoute = {
    snapshot: { data: {} },
  } as ActivatedRoute;

  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [MovieDetailsService, HttpClient, { provide: ActivatedRoute, useValue: fakeActivatedRoute }],
      declarations: [MovieDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();

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

  it('should redirect when homepage button clicked'),
    () => {
      component.redirectToHomepage();

      expect(component).toBeFalsy();
    };
});
