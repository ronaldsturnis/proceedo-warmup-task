import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { paths } from 'src/app/paths.const';
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
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.movieDetails$ = this.movieDetailsService.getMovieDetails(
      Number(this.activatedRoute.snapshot.url[1].path)
    );
  }

  redirectToHomepage(): void {
    this.router.navigate([paths.topRatedMoviesPath]);
  }
}
