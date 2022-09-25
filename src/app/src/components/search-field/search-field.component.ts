import { Component } from '@angular/core';
import { paths } from 'src/app/paths.const';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.less'],
})
export class SearchFieldComponent {
  searchQuery!: string;
  readonly searchResultsPath = paths.searchResultsPath;

  constructor() {}
}
