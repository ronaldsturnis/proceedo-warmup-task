import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { paths } from 'src/app/paths.const';
import { IMovie } from 'src/app/src/models/IMovie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.less'],
})
export class MovieComponent {
  @Input() movieData!: IMovie;
  selectedAsFavourite = false;

  constructor(public router: Router) {}

  showMovieDetails(movieId: number): void {
    this.router.navigate([paths.movieDetailsPath], { queryParams: { movieId: movieId } });
  }

  markMovieAsFavourite(): void {
    this.selectedAsFavourite = !this.selectedAsFavourite;
  }
}
