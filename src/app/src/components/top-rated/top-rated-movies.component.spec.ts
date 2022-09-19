import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TopRatedMoviesService } from '../../services/top-rated-movies.service';

import { TopRatedMoviesComponent } from './top-rated-movies.component';

describe('TopRatedMoviesComponent', () => {
  let component: TopRatedMoviesComponent;
  let fixture: ComponentFixture<TopRatedMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [TopRatedMoviesService, HttpClient],
      declarations: [TopRatedMoviesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
