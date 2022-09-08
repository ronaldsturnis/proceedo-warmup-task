import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../interfaces/IMovie';
import { TopRatedMoviesService } from '../../services/top-rated-movies.service';

@Component({
  selector: 'app-favourite-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.less'],
})
export class TopRatedMoviesComponent implements OnInit {
  topRatedMovieList = new Array<IMovie>();

  constructor(private topRatedMoviesService: TopRatedMoviesService) {}

  ngOnInit(): void {
    this.topRatedMoviesService.getTopRatedMovies().subscribe((response) => {
      this.topRatedMovieList = response.results;
    });
  }
}
