import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { paths } from 'src/app/paths.const';
import { IMoviePage } from '../../models/IMoviePage.model';
import { PopularMoviesService } from '../../services/popular-movies.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.less'],
})
export class PopularMoviesComponent implements OnInit {
  popularMovieList$!: Observable<IMoviePage>;

  constructor(
    private popularMoviesService: PopularMoviesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.popularMovieList$ = this.popularMoviesService.getPopularMovies();
  }

  showMovieDetails(movieId: number): void {
    this.router.navigate([paths.movieDetailsPath, movieId]);
  }
}
