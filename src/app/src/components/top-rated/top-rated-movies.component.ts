import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../../interfaces/IMovie';
import { IMoviePage } from '../../interfaces/IMoviePage';
import { TopRatedMoviesService } from '../../services/top-rated-movies.service';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.less'],
})
export class TopRatedMoviesComponent implements OnInit {
  topRatedMovieList$ = new Observable<IMoviePage>();

  constructor(private topRatedMoviesService: TopRatedMoviesService) {}

  ngOnInit(): void {
    this.topRatedMovieList$ = this.topRatedMoviesService.getTopRatedMovies();
  }
}
