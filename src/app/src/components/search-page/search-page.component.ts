import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { paths } from 'src/app/paths.const';
import { IMoviePage } from '../../models/IMoviePage.model';
import { SearchMoviesService } from '../../services/search-movies.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.less'],
})
export class SearchPageComponent implements OnInit {
  searchResults$ = new Observable<IMoviePage>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private searchMoviesService: SearchMoviesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchResults$ = this.activatedRoute.queryParams.pipe(
      switchMap((params) =>
        this.searchMoviesService.getSearchResults(params['query'])
      )
    );
  }

  showMovieDetails(movieId: any): void {
    this.router.navigate([paths.movieDetailsPath, movieId]);
  }
}
