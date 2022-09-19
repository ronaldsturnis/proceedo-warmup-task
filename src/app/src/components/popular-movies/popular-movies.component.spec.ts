import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PopularMoviesService } from '../../services/popular-movies.service';

import { PopularMoviesComponent } from './popular-movies.component';

describe('PopularMoviesComponent', () => {
  let component: PopularMoviesComponent;
  let fixture: ComponentFixture<PopularMoviesComponent>;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [PopularMoviesService, HttpClient],
      declarations: [PopularMoviesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularMoviesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.ngOnInit();

    expect(component).toBeTruthy();
  });
});
