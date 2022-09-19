import { Component, OnInit } from '@angular/core';
import { paths } from 'src/app/paths.const';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.less'],
})
export class SearchFieldComponent implements OnInit {
  searchQuery!: string;
  searchResultsPath = paths.searchResultsPath;

  constructor() {}

  ngOnInit(): void {}
}
