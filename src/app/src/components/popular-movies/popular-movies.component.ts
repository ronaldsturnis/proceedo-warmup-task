import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMoviePage } from '../../models/IMoviePage.model';
import { PopularMoviesService } from '../../services/popular-movies.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.less'],
})
export class PopularMoviesComponent implements OnInit {
  popularMovieList$!: Observable<IMoviePage>;

  constructor(private popularMoviesService: PopularMoviesService) {}

  ngOnInit(): void {
    this.popularMovieList$ = this.popularMoviesService.getPopularMovies();
  }
}
