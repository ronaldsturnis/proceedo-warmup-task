import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
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
      providers: [
        MovieDetailsService,
        HttpClient,
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
      ],
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
});
