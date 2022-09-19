import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { paths } from 'src/app/paths.const';
import { IMovie } from 'src/app/src/models/IMovie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.less'],
})
export class MovieComponent implements OnInit {
  @Input() movieData!: IMovie;
  selectedAsFavourite = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  showMovieDetails(movieId: number): void {
    this.router.navigate([paths.movieDetailsPath, movieId]);
  }

  markMovieAsFavourite(): void {
    this.selectedAsFavourite = !this.selectedAsFavourite;
  }
}
