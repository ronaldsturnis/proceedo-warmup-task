import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { paths } from 'src/app/paths.const';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.less'],
})
export class SearchFieldComponent {
  searchQuery!: string;

  constructor(private router: Router) {}

  redirectToSearchResults(searchQuery: string): void {
    this.router.navigate([paths.searchResultsPath], { queryParams: { searchQuery: searchQuery } });
  }
}
