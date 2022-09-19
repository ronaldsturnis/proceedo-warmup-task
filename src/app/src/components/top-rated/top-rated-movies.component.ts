import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { paths } from 'src/app/paths.const';
import { IMoviePage } from '../../models/IMoviePage.model';
import { TopRatedMoviesService } from '../../services/top-rated-movies.service';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.less'],
})
export class TopRatedMoviesComponent implements OnInit {
  topRatedMovieList$!: Observable<IMoviePage>;

  constructor(private topRatedMoviesService: TopRatedMoviesService, private router: Router) {}

  ngOnInit(): void {
    this.topRatedMovieList$ = this.topRatedMoviesService.getTopRatedMovies();
  }

  showMovieDetails(movieId: number): void {
    this.router.navigate([paths.movieDetailsPath, movieId]);
  }
}
