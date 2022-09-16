import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { IMovieDetails } from '../../models/IMovieDetails.model';
import { MovieDetailsService } from '../../services/movie-details.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.less'],
})
export class MovieDetailsComponent implements OnInit {
  movieDetails$ = new Observable<IMovieDetails>();

  constructor(
    private movieDetailsService: MovieDetailsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.movieDetails$ = this.movieDetailsService.getMovieDetails(
      Number(this.activatedRoute.snapshot.url[1].path)
    );
  }
}
