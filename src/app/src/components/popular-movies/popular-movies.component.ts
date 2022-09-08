import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/src/interfaces/IMovie';
import { PopularMoviesService } from '../../services/popular-movies.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.less'],
})
export class PopularMoviesComponent implements OnInit {
  popularMovieList = new Array<IMovie>();

  constructor(private popularMoviesService: PopularMoviesService) {}

  ngOnInit(): void {
    this.popularMoviesService.getPopularMovies().subscribe((response) => {
      this.popularMovieList = response.results;
    });
  }
}
