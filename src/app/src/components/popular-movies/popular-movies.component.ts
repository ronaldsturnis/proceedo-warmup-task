import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from 'src/app/src/interfaces/IMovie';
import { IMoviePage } from '../../interfaces/IMoviePage';
import { PopularMoviesService } from '../../services/popular-movies.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.less'],
})
export class PopularMoviesComponent implements OnInit {
  popularMovieList$ = new Observable<IMoviePage>();

  constructor(private popularMoviesService: PopularMoviesService) {}

  ngOnInit(): void {
    this.popularMovieList$ = this.popularMoviesService.getPopularMovies();
  }
}
