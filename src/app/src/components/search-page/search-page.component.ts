import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { IMoviePage } from '../../models/IMoviePage.model';
import { SearchMoviesService } from '../../services/search-movies.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.less'],
})
export class SearchPageComponent implements OnInit {
  searchResults$!: Observable<IMoviePage>;

  constructor(private activatedRoute: ActivatedRoute, private searchMoviesService: SearchMoviesService) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['searchQuery'] !== '' && params['searchQuery'] !== undefined) {
        this.searchResults$ = this.searchMoviesService.getSearchResults(params['searchQuery']);
      } else {
        this.searchResults$ = new Observable<IMoviePage>();
      }
    });
  }
}
